import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import FormCart from "../FormCart/FormCart";
import s from "./Cart.module.css";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { cart, cartTotal, disminuirProd, aumentarProd, deleteOne, clearCart } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <span>Carrito vacio.</span>
          <br></br>
          <Link to={"/"}>Agregue productos</Link>
        </>
      ) : (
        <div className={s.cartContainer}>
          {cart.map((prod) => (
            <CartDetail
              key={prod.id}
              prod={prod}
              deleteOne={deleteOne}
              disminuirProd={disminuirProd}
              aumentarProd={aumentarProd}
            />
          ))}
          <div>
            <button className={s.vaciar} onClick={clearCart}>
              Vaciar carrito
            </button>
            <h2>Total: ${cartTotal}</h2>
          </div>
          <FormCart
            cart={cart}
            cartTotal={cartTotal}
            clearCart={clearCart}
          ></FormCart>
        </div>
      )}
    </>
  );
};

export default Cart;
