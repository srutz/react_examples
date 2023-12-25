
/*
import quotesData from "../common/quotes.json" 

type Quote = {
    id: number
    quote: string
    author: string
}

type QuotesData = {
    quotes: Quote[]
}
const quotes = (quotesData as QuotesData).quotes
*/



import { AnimatedDiv } from "../common/AnimatedDiv"


export function Loop() {

    const months = [
        "Jan", "Februar", "März", "April", "Mai", "Juni", "July", "August", "September", "Oktober", "November", "Dezember"
    ]
    


    /* alternative way to using map ...
    const jsx: React.ReactNode[] = []
    {
        let index = 1
        for (const month of months) {
            jsx.push((<li key={index}>Monat {index}: {month}</li>))
            index++
        }
    }
    */


    return (
        <ul style={{ position: "relative" }}>
            {months.map((month,index) => (
                <AnimatedDiv  key={index} relative fromPosition={{x: -2000, y: 0}} position={{x: 0, y: 0}}>
                    <li key={index} >Monat {index + 1}: {month}</li>
                </AnimatedDiv>
            ))}
        </ul>
    )
}