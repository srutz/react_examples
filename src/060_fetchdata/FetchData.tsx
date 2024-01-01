
import { useEffect, useState } from "react"
import classes from "./FetchData.module.css"

export type Product = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export type ProductsData = {
    products: Product[]
}

export function ProductCard(props: { product: Product }) {
    function formatPrice(n: number) {
        return n.toFixed(2)
    }


    const { product } = props
    return (
        <div className={classes.productcard}>
            <div className={classes.imagecontainer}>
                <img className={classes.image} src={product.thumbnail}></img>
            </div>
            <div className={classes.title}>{product.title}</div>
            <div className={classes.description}>{product.description}</div>
            <div className={classes.price}>{formatPrice(product.price)} €</div>
        </div>
    )
}


async function delay(delayMs: number) {
    return new Promise(resolve => {
        setTimeout(resolve, delayMs)
    })
}


export function FetchData() {

    const[products,setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://dummyjson.com/products")
            const productsData = await response.json() as ProductsData
            setProducts(productsData.products)
        })();
    }, []);

    return (
        <div className={classes.panel}>
            <div className={classes.heading}>Produkte</div>
            <div className={classes.contentarea}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}>
                    </ProductCard>
                ))}
            </div>
        </div>
    )
}