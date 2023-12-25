import quotesData from "../common/quotes.json" 


export function randomId() {
    const ts = new Date()
    let id = "" + Math.random() + ts.getTime()
    id = id.replace(/\./, "").substring(1)
    return id
} 

export function makeLongText(n: number) {
    let t = ""
    quotesData.quotes.slice(1, Math.min(100, n)).map(q => q.quote as string).forEach(q => t += q)
    return t
}