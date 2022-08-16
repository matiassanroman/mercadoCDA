import { Link } from "react-router-dom"
import styleCard from '../CartList/Cart.module.css'
import start from '../../assets/start.png';
import none from '../../assets/none.png';
import { useContext } from "react";
import { FavContext } from "../Context/FavContext";

const CardList = ({ items }) => {

  const { addToFav, deleteFav, isInFav } = useContext(FavContext)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%' }}>
        {items.map((prod) => (
          <div className={styleCard.card} key={prod.id}>
            <img src={prod.img} alt={prod.name} />
            <div className={styleCard.info}>
              <h3>{prod.name}</h3>
              <h4>$ {prod.price}</h4>
              <Link to={`/productdetail/${prod.id}`}>Ver Detalle</Link>
              <br></br>
              <br></br>
              {
                isInFav(prod.id) ?
                  <img style={{ width: '32px' }} src={start} alt={'Sacar'} onClick={() => deleteFav(prod.id)} />
                :
                  <img style={{ width: '32px' }} src={none} alt={'Agregar'} onClick={() => addToFav(prod)} />
              }
            </div>
          </div>   
        ))}
    </div>
  )
}

export default CardList