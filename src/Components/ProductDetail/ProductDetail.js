import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { Counter } from "../Counter/Counter";
import styleCartList from "../Home/CartList.module.css";

export const ProductDetail = () => {
  //Como se que es un objeto lo puedo destructurar
  //const {id} = useParams()
  const params = useParams();

  const navigate = useNavigate();

  const { addToCart, isInCart } = useContext(CartContext);

  const [item, setItem] = useState({});
  const URL = "https://fake-products-eric.herokuapp.com/api/products/detail/";

  useEffect(() => {
    fetch(URL + params.id)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [params.id]);

  const countToCart = (categoryId, cantidad) => {
    console.log(
      "Successfully added to your shopping cart: %o" +
        categoryId +
        " Count: %o" +
        cantidad
    );
    addToCart(item, cantidad);
    navigate("/cart");
  };

  return (
    <div className={styleCartList.detail}>
      <img src={item.img} alt={item.name} />
      <div className={styleCartList.info}>
        <h2>{item.name}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nulla
          voluptas consequuntur aut quia fugit cumque aperiam, corporis
          voluptate repudiandae ducimus qui, beatae architecto culpa dolore nemo
          illum, enim iste?
        </p>
        <h4>#{item.categoria}</h4>
        <h3>$ {item.price}.-</h3>

        {isInCart(item.id) ? (
          <>
            <span> Ya esta en el carrito.</span>
            <Link to={"/cart"}>Ir</Link>
          </>
        ) : (
          <Counter
            stock={item.stock}
            initial={1}
            countToCart={countToCart}
            categoryId={item.categoria}
          />
        )}
      </div>
    </div>
  );
};
