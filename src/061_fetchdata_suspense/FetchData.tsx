
type FetchFunction<T> = () => Promise<T>;

interface CacheContent<T> {
  status: 'pending' | 'success' | 'error'
  data?: T
  error?: Error
  promise: Promise<T>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const promiseCache = new Map<string, CacheContent<any>>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetchData<T>(fetchFunction: FetchFunction<T>, deps: any[] = []): T {
  const cacheKey = JSON.stringify(deps)
  console.table(promiseCache)
  const cached: CacheContent<T> | undefined = promiseCache.get(cacheKey)

  if (cached) {
    if (cached.status === 'pending') throw cached.promise
    if (cached.status === 'error') throw cached.error
    return cached.data!
  }

  let resolve: (data: T) => void = () => {}
  let reject: (error: Error) => void = () => {}

  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })

  promiseCache.set(cacheKey, {
    status: 'pending',
    data: null,
    promise: promise.then(data => {
      promiseCache.set(cacheKey, { promise, status: 'success', data })
      return data
    }).catch(error => {
      promiseCache.set(cacheKey, { promise, status: 'error', error })
      throw error
    })
  })

  fetchFunction().then(resolve, reject)
  throw promise
}
