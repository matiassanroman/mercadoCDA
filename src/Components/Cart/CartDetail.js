import React from 'react'
import { Link } from 'react-router-dom';
import s from './CartDetail.module.css';

const CartDetail = ({ prod, disminuirProd, aumentarProd, deleteOne }) => {

    return (
        <div className={s.containerCartDetail}>
            <div className={s.infoCartDetail}>
                <img src={prod.img} alt={prod.name} />
                <article>
                    <h3>{prod.name}</h3>
                    <div className={s.subtotal}>
                        <button className={s.boton} onClick={() => disminuirProd(prod.id)}>-</button>
                        <h4>{prod.cantidad} </h4>
                        <button className={s.boton} onClick={() => aumentarProd(prod.id)}>+</button>
                        <h4> * $ {prod.price}</h4>
                        <h4>= ${prod.price * prod.cantidad}.-</h4>
                    </div>
                </article>
                <Link to={"/productdetail/"+prod.id}>Ver Detalle</Link>
                <button
                    className={s.botonDelete}
                    onClick={() => deleteOne(prod.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default CartDetail