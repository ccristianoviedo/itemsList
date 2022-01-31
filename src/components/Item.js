import './Item.css'


let contenedor=[]

//Funciones
function  detalle (e) {
  let hijo = e.target
  let padre = hijo.parentNode
  

  let nombreProducto = padre.querySelector('h1').textContent;
  let imagen = padre.querySelector('img').src;
  let descripcion = padre.querySelector('p').textContent;
  let precio = padre. querySelector('h3').textContent;

   
  const producto ={
    nombre:nombreProducto,
    imagen:imagen,
    descripcion:descripcion,
    precio:precio,
  }
  contenedor.push({producto})
  
  mostrarContenedor({producto})
}

function mostrarContenedor({producto}) {

  let verDetalle = document.createElement('div');
  verDetalle.classList.add('itemDetalles2')
  verDetalle.innerHTML = `<h1 className='title'>${producto.nombre}</h1>
                    <img src=${producto.imagen}  />
                    <p>Descripcion:${producto.descripcion}</p>
                    <h3>${producto.precio}</h3>  
                    <td><button class="btnEliminar"> X </button></td>                     
                    `
  let tbody = document.querySelector('.tbody');
  tbody.appendChild(verDetalle);
  verDetalle.querySelector('.btnEliminar').addEventListener('click', eliminar)
}

function eliminar(e) {
  let btnEliminar = e.target;
  let btnX = btnEliminar.closest('.itemDetalles2');
  const title = btnX.querySelectorAll('.title').textContent;
  for(let i=0; i<contenedor.length ; i++){
    if(contenedor[i].title === title){
      contenedor.splice(i, 1)
    }
  }
   
  btnX.remove();  
}

       
const Items = ({productos})=> {
    
    return (
    <div className="itemIndividual">
        <img src={productos.img} alt={productos.productos} />
        <h1>{productos.producto}</h1>
        <button onClick={detalle}>Detalles</button>
        <nav className='tbody'></nav>
        <div className='itemDetalles3'>
                <h1>{productos.producto}</h1>
                <img src={productos.img} alt={productos.productos} />
                <p>Descripcion:{productos.descripcion}</p>
                <h3>$: {productos.precio}</h3>                 
        </div>      
    </div>
    )

}

export default Items;