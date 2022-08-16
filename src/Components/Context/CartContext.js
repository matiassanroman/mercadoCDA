import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

//Props: puedo ver los hijos que envuelve en App
//console.log(props.children);
const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartUnidades, setCartUnidades] = useState(0);

    useEffect(() => {
        total()
        unidades()
        // eslint-disable-next-line
    }, [cart]);

    const total = () => {
        const copy = [...cart]
        let count = 0

        copy.forEach((prod) => {
            count += prod.cantidad * prod.price
        })

        setCartTotal(count)
    }
    
    const unidades = () => {
        const copy = [...cart]
        let count = 0

        copy.forEach((prod) => {
            count += prod.cantidad
        })

        setCartUnidades(count)
    }

    const addToCart = (item, cantidad) => {        
        if(isInCart(item.id)){
            alert("Ya esta en el carrito")
        }else{
            //Agrego lo que ya tengo ...cart + lo nuevo (...item, cantidad)
            setCart([...cart, {...item, cantidad}]);
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }

    const disminuirProd = (id) => {
        setCart(cart.map(prod => {
            if (prod.id === id) {
                prod.cantidad = prod.cantidad-1
                return prod;
            }
      
            return prod;
          }));
    }

    const aumentarProd = (id) => {
        setCart(cart.map(prod => {
            if (prod.id === id) {
                prod.cantidad = prod.cantidad+1
                //O tambien: 
                //...prod, Lo que ya tenia y agrego cantidad
                //cantidad : prod.cantidad + 1
                return prod;
            }
      
            return prod;
          }));
    }

    const deleteOne = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            cartTotal, 
            cartUnidades,
            addToCart, 
            isInCart,
            disminuirProd, 
            aumentarProd, 
            deleteOne, 
            clearCart 
            }}>
            {/* Tengo que pasar a mis hijos */}
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider