import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Inicio from './page/inicio'
import About from './page/about'
import { ProductosList } from './page/productos'
import { ProductosDetalles } from './page/productos/ProductosDetalles'

export default function Page() {
	return (
		<section>
			<Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/about" exact component={About} />
				<Route path="/productos" exact component={ProductosList} />
				<Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>
		</section>
	)
}
