import { useState, useEffect } from "react"
import CardList from "../CartList/CartList";
import { useParams } from "react-router-dom"
import styleCartList from "../Home/CartList.module.css"

export const Home = () => {

    const [items, setItems] = useState([]);

    const {categoryId} = useParams()

    const URL = 'https://fake-products-eric.herokuapp.com/api/products'

    useEffect(() => {
        fetch(categoryId ? URL + `/category/${categoryId}` : URL)
            .then((res) => res.json())
            .then((res) => setItems(res)); 
    }, [categoryId]);

    return (
        
        <>
            <h1>Lista de productos</h1>
            <div className={styleCartList.detailContainer}>
                <CardList items={items} />
            </div>
        </> 
    )
}
