import React from 'react';		
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito,agregarProducto}) => (

	<div className='carrito'>
		<h2>Tu carrito</h2>

		{
			carrito.length === 0 
			?
			<p>Sin producttos seleccionados</p>	
			:carrito.map(producto => (
			<Producto 
            key = {producto.id}
            producto={producto}
				carrito={carrito}
				agregarProducto={agregarProducto}
          />
		))}
	</div>
)
 
export default Carrito;