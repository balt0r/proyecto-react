import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListConteiner = ({ greeting }) => {
    const [products, setProducs] = useState([])
    const { categoryId } = useParams() 

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts 

       asyncFunc(categoryId)
       .then(Response => {
            setProducs(Response)
       })
       .catch(error => {
            console.error(error)
       })
    }, [categoryId])
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner