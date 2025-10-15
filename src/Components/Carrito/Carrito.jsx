import "./Carrito.css";

const Carrito = ({ carrito, eliminarProducto, vaciarCarrito }) => {
    return (
        <section className="carrito">
            <h2>🛒 Carrito</h2>

            <div className="card-info">
                {carrito.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    carrito.map((producto, index) => (
                        <div className="card-prod" key={index}>
                            <img src={producto.image} alt={producto.title} />
                            <p>
                                {producto.title.length > 40
                                    ? producto.title.slice(0, 40) + "..."
                                    : producto.title}
                            </p>
                            <h4>${producto.price}</h4>
                            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                        </div>
                    ))
                )}
            </div>

            {carrito.length > 0 && (
                <button onClick={vaciarCarrito} className="vaciar-carrito-btn">
                    Vaciar Carrito
                </button>
            )}
        </section>
    );
};

export default Carrito;

// import { useState } from "react";
// import "./Carrito.css";

// const Carrito = () => {
//     const listaProductos = [
//         { id: 1, nombre: "Pantalón", precio: 20000 },
//         { id: 2, nombre: "Camisa", precio: 15000 },
//         { id: 3, nombre: "Zapatos", precio: 70000 },
//     ];

//     const [carrito, setCarrito] = useState([]);

//     const agregarCarrito = (producto) => {
//         setCarrito([...carrito, producto]);
//     };
//     const vaciarCarrito = () => {
//         setCarrito([]);
//     };

//     const eliminarProducto = () => {
//         console.log("object");
//     };

//     return (
//         <>
//             <section className="carrito">
//                 {listaProductos.map((producto) => (
//                     <div className="card-prod" key={producto.id}>
//                         <h2>{producto.nombre}</h2>
//                         <h3>${producto.precio}</h3>
//                         <button onClick={() => agregarCarrito(producto)}>Comprar</button>
//                     </div>
//                 ))}
//                 <h2>Carrito</h2>
//                 {carrito.map((articulo, index) => (
//                     <>
//                         <div className="card" key={index}>
//                             {console.log(index)}
//                             <h2>{articulo.nombre}</h2>
//                             <h3>${articulo.precio}</h3>
//                             <button onClick={eliminarProducto}>Eliminar</button>
//                         </div>
//                     </>
//                 ))}
//             </section>
//             <button onClick={vaciarCarrito}>Vaciar Carrito</button>
//         </>
//     );
// };

// export default Carrito;
