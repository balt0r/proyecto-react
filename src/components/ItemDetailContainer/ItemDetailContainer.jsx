import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetaiContainer = () => {
    const [product, setProduct] = useState(null)
    const { ItemId } = useParams

    useEffect(() => {
        fetch('//dummyjson.com/test')
        .then(res => res.json())
        .then(console.log);
    }, [ItemId])

    return(
        <div className="ItemDetailContainer" >
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer