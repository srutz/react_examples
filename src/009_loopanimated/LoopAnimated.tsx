
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



import { useEffect, useState } from "react"
import { AnimatedDiv } from "../common/AnimatedDiv"


export function LoopAnimated() {

    const months = [
        "Jan", "Februar", "März", "April", "Mai", "Juni", "July", "August", "September", "Oktober", "November", "Dezember"
    ]
    
    const [fadeIn,setFadeIn] = useState(false)
    useEffect(() => {
        setFadeIn(true)
    }, [])

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
                <AnimatedDiv  key={index} relative delayMs={100 + index * 200} position={{x: fadeIn ? 0 : -2000, y: 0}}>
                    <li key={index} >Monat {index + 1}: {month}</li>
                </AnimatedDiv>
            ))}
        </ul>
    )
}