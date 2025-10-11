import "./Productos.css";
import { useNavigate } from "react-router-dom";

const Productos = ({ productos, agregarCarrito }) => {
    // const navigate = useNavigate(); // ✅ Debe ir aquí arriba, no dentro de useEffect

    // const irDetallesProducto = (id) => {
    //     navigate(`/producto/${id}`); // ✅ Usá template string correcta
    // };
    return (
        <>
            <h1>Productos</h1>
            <section className="container">
                {productos.map((producto) => (
                    <div
                        className="card"
                        key={producto.id}
                        onClick={(e) => {
                            e.preventDefault();
                            irDetallesProducto(producto.id);
                        }}
                    >
                        <img src={producto.image} alt={producto.title} />
                        <h4>
                            {producto.title.length > 40
                                ? producto.title.slice(0, 40) + "..."
                                : producto.title}
                        </h4>
                        <h5>Precio: ${producto.price}</h5>
                        <button
                            onClick={(e) => {
                                e.preventDefault(); // 👈 evita que el click al botón dispare el NavLink
                                agregarCarrito(producto);
                            }}
                        >
                            Comprar 🛒
                        </button>
                        {/* <button onClick={() => agregarCarrito(producto)}>Agregar al 🛒</button> */}
                    </div>
                ))}
            </section>
        </>
    );
};

export default Productos;

// import { useState, useEffect } from "react";
// import "./Productos.css";
// import { NavLink } from "react-router-dom";

// const Productos = () => {
//     const [productos, setProductos] = useState([]);
//     const [error, setError] = useState(null);
//     const [cargando, setCargando] = useState(true);
//     const [carrito, setCarrito] = useState([]);

//     useEffect(() => {
//         const obtenerProductos = async () => {
//             try {
//                 const response = await fetch("https://fakestoreapi.com/products");

//                 if (!response.ok) {
//                     throw new Error(`Error al obtener los productos. Estado: ${response.status}`);
//                 }

//                 const data = await response.json();
//                 setProductos(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setCargando(false);
//             }
//         };

//         obtenerProductos();
//     }, []);

//     if (cargando) return <p>Cargando productos...</p>;
//     if (error) return <p>Error: {error}</p>;

//     const agregarCarrito = (producto) => {
//         setCarrito([...carrito, producto]);
//     };

//     return (
//         <>
//             <h1>Productos</h1>
//             <section className="container">
//                 {productos.map((producto) => (
//                     <NavLink
//                         to={`/producto/${producto.id}`}
//                         key={producto.id}
//                         className="card-link"
//                     >
//                         <div className="card">
//                             <img src={producto.image} alt={producto.title} />
//                             <h4>
//                                 {producto.title.length > 40
//                                     ? producto.title.slice(0, 40) + "..."
//                                     : producto.title}
//                             </h4>
//                             <h5>Price: ${producto.price}</h5>
//                             {/* <button>Comprar</button> */}
//                             <button onClick={() => agregarCarrito(producto)}>Comprar</button>
//                         </div>
//                     </NavLink>
//                 ))}
//             </section>
//         </>
//     );
// };

// export default Productos;
