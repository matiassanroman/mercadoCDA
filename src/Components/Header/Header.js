import { Link } from "react-router-dom"
import s from '../Header/Header.module.css';
import carrito from '../../assets/cart.svg';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FavContext } from "../Context/FavContext";

export const Header = ({ isInHedaer }) => {

  const { cartUnidades } = useContext(CartContext);
  const { favUnidades } = useContext(FavContext)


  const categories = [
    {
      id : 1,
      name : 'Remeras',
      path : 'category/remeras'
    },
    {
      id : 2,
      name : 'Camisas',
      path : 'category/camisas'
    },
    {
      id : 3,
      name : 'Gorras',
      path : 'category/gorras'
    },
    {
      id : 4,
      name : 'Billeteras',
      path : 'category/billeteras'
    },
    {
      id : 5,
      name : 'Riñoneras',
      path : 'category/rinoneras'
    }
  ]

  return (
    <nav className={s.nav}>
      <Link to="/">
          <h2>CDA</h2>
      </Link>

      <ul>
        {categories.map((category) => (
            <Link
                key={category.id}
                className={s.linkNav}
                to={category.path}
            >
                {category.name}
            </Link>
        ))}
      </ul>

      <div>
        { favUnidades === 0 ? 
          null :
          <Link to="/misreservas">
            <span>Mis Favoritos({ favUnidades })</span>
        </Link>
        }

        <Link to="/cart">
            <img src={carrito} alt="logo" />
            { cartUnidades === 0 ? null : cartUnidades}
        </Link>
      </div>
    </nav>
  )
}
