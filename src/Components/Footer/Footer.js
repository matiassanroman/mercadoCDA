import React from 'react'
import { Link } from 'react-router-dom';
import s from '../Header/Header.module.css';

const Footer = () => {

    const redes = [
        {
            id : 1,
            name : 'Instagram',
            path : '',
            logo : 'https://e7.pngegg.com/pngimages/16/46/png-clipart-made-in-kings-heath-instagram-facebook-female-graphy-instagram-logo-instagram-icon-text-trademark.png'
          },
          {
            id : 2,
            name : 'Facebook',
            path : '',
            logo : 'https://img1.freepng.es/20180319/iyw/kisspng-facebook-logo-social-media-computer-icons-icon-facebook-drawing-5ab02fb69f99c4.9538101315214959906537.jpg'
          },
          {
            id : 3,
            name : 'WhatsApp',
            path : '',
            logo : 'https://flyclipart.com/thumbs/free-whatsapp-logo-210x-whatsapp-logo-transparent-background-1048093.png'
          }
    ]

  return (
    <nav className={s.navFooter}>
      <ul>
        {redes.map((red) => (
            <>
                <img className={s.sizeLogo} src={red.logo} alt={red.name}></img>
                <Link
                    key={red.id}
                    className={s.linkFooter}
                    to={red.path}
                >
                    {red.name}
                </Link>
            </>
        ))}
      </ul>
    </nav>
  )
}

export default Footer