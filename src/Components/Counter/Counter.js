import React, { useState } from 'react'

export const Counter = (props) => {

    const [count,setCount] = useState(props.initial);

    const sumar = () => {
        count < props.stock ? setCount(count + 1) : alert(`Tiene que ser menor o igual a ${props.stock}`)
    }

    const restar = () => {
        1 < count ? setCount(count - 1) : alert('Tiene que ser mayor o igual a 1.')
    }

    return (
        <>
            <div>
                <button onClick={sumar}>+</button>
                <h2>{count}</h2>
                <button onClick={restar}>-</button>
            </div>
            <br></br>
            <div>
                <button onClick={() => props.countToCart(props.categoryId,count)}>AddToCart</button>
            </div>
        </>
    )
}
