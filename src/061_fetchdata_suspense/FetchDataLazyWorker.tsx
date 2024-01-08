import classes from "./FetchDataSuspense.module.css";
import { ProductCard, ProductsData } from "../060_fetchdata/FetchData";
import { useFetchData } from "./FetchData"

async function delay(delayMs: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, delayMs)
    });
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FetchDataLazyWorker(props: { keys: any[]}) {
    const fetchfunc = async () => {
        await delay(2000)
        const response = await fetch("https://dummyjson.com/products")
        const productsDataPromise = response.json()
        return productsDataPromise as Promise<ProductsData>
    }
    const products = useFetchData(fetchfunc, props.keys).products

    return (
        <>
            <div className={classes.contentarea}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </>
    );
}
