
import React, { useState, useContext } from 'react'
import { DataContext } from 'context/DataProvider'
import { Link } from 'react-router-dom'
import Smart from 'images/smart.webp'

// import style module
import styles from './styles/header.module.css'

export const Header = () => {

  const [login, setLogin] = useState(false);

  const changeLogin = () => {
    if (!login) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };


	const value = useContext(DataContext)
	const [carrito] = value.carrito
	const [menu, setMenu] = value.menu

	const toogleMenu = () => {
		setMenu(!menu)
	}

	return (
		<header className={styles.header}>
			<div className="menu">
				<box-icon name="menu"></box-icon>
			</div>
			<Link to="/">
        <img src={Smart} alt="Nike" className={styles.logo} />
			</Link>
			<ul className={styles.lista}>
				<li>
					<Link to="/">INICIO</Link>
				</li>
				<li>
					<Link to="/productos">PRODUCTOS</Link>
				</li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/">CONTACTS</Link>
        </li>
			</ul>

      <div className={styles.secondBox}>
        {login && <box-icon name="user"></box-icon>}
        <button onClick={() => changeLogin()} className={styles.toggleSession}>
          {!login ? "Sign In" : "close"}
        </button>
        <div className={styles.boxCart} onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className="item__total"> {carrito.length} </span>
        </div>
      </div>
		</header>
	)
}
