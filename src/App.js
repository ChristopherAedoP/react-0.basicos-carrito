import React, { Fragment , useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/carrito';

function App() {

  //crear listado de productos
  const [productos, guardarProductos] = useState([
    {id: 1 , nombre :'Camisa ReactJS', precio: 50},
    {id: 2 , nombre :'Camisa Angular', precio: 40},
    {id: 3 , nombre :'Camisa PHP', precio: 70},
    {id: 4 , nombre :'Camisa .Net', precio: 90}
  ]);

  const [carrito, agregarProducto] = useState([]);

  //obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />
      <h1>Lista de productos</h1>

      {productos.map(producto => (
          <Producto 
            key = {producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
      ))}

        <Carrito
          carrito = {carrito}
          agregarProducto={agregarProducto}
        />

      <Footer 
        fecha={fecha}

      />
    </Fragment>
  );
}

export default App;
