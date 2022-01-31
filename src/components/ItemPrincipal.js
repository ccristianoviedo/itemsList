import React, { useEffect, useState } from 'react';
import traerProductos, { PRODUCTOS } from './Itemlist';
import './ItemPrincipal.css'
import Items from './Item';




function ItemPrincipal() {
    const[productos, setProductos]=useState([]);
    const[cargando, setCargando]=useState(false);
    
    useEffect (()=> {
      setCargando(true)
      traerProductos()
      .then((data)=> setProductos(data))
      .catch((error)=> console.log(error))
      .finally(()=>setCargando(false))
      },[]);
    
    
    return (
      <div className="App1">
        <header className="App-header1">
         <h1>VINOTECA OVIEDO</h1>
        </header>
        <nav className='itemProductos1'>
          {cargando ? (
          <p>CARGANDO........</p>) :(
          PRODUCTOS.map((productos)=>
            <Items Key={productos.id} productos={productos} />
          ))}
        </nav>            
      </div>
    );
  }
  
  
  export default ItemPrincipal;
  