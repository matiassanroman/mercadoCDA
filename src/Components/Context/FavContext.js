import React, { createContext, useEffect, useState } from 'react'

export const FavContext = createContext();

const FavProvider = (props) => {

    const [fav, setFav] = useState([]);
    const [favUnidades, setFavUnidades] = useState([]);

    useEffect(() => {
        unidades()
        // eslint-disable-next-line
    }, [fav]);

    const unidades = () => {
        const copy = [...fav]
        let count = 0

        copy.forEach((prod) => {
            count += 1
        })

        setFavUnidades(count)
    }

    const addToFav = (prod) => {
        setFav([...fav, prod]);
    }

    const deleteFav = (id) => {
        setFav(fav.filter((prod) => prod.id !== id))
    }

    const isInFav = (id) => {
        return fav.some((prod) => prod.id === id);
    }

  return (
    <FavContext.Provider value={{ 
        favUnidades,
        addToFav,
        deleteFav,
        isInFav
        }}>
        {/* Tengo que pasar a mis hijos */}
        {props.children}
    </FavContext.Provider>
  )
}

export default FavProvider