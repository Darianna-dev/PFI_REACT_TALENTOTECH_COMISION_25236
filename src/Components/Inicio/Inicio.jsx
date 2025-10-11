import React, { useState, useEffect } from "react";
import "./Inicio.css";
import Productos from "../Productos/Productos";
import Carrito from "../Carrito/Carrito";

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const data = await response.json();
                setProductos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };
        obtenerProductos();
    }, []);

    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarProducto = (index) => {
        setCarrito(carrito.filter((_, i) => i !== index));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <>
            <Productos productos={productos} agregarCarrito={agregarCarrito} />
            <Carrito
                carrito={carrito}
                eliminarProducto={eliminarProducto}
                vaciarCarrito={vaciarCarrito}
            />
        </>
    );
};

export default Inicio;

// import React from "react";
// import "./Inicio.css";
// import Productos from "../Productos/Productos";
// import Cafe from "../Cafe/Cafe";
// import { useState } from "react";
// import Carrito from "../Carrito/Carrito";

// const Inicio = () => {
//     // const [productos, setProductos] = useState([]);
//     // const [error, setError] = useState(null);
//     // const [cargando, setCargando] = useState(true);
//     // const [carrito, setCarrito] = useState([]);

//     // useEffect(() => {
//     //     const obtenerProductos = async () => {
//     //         try {
//     //             const response = await fetch("https://fakestoreapi.com/products");

//     //             if (!response.ok) {
//     //                 throw new Error(`Error al obtener los productos. Estado: ${response.status}`);
//     //             }

//     //             const data = await response.json();
//     //             setProductos(data);
//     //         } catch (err) {
//     //             setError(err.message);
//     //         } finally {
//     //             setCargando(false);
//     //         }
//     //     };

//     //     obtenerProductos();
//     // }, []);

//     // if (cargando) return <p>Cargando productos...</p>;
//     // if (error) return <p>Error: {error}</p>;

//     // const agregarCarrito = (producto) => {
//     //     setCarrito([...carrito, producto]);
//     // };

//     const [carrito, setCarrito] = useState([]);

//     const agregarAlCarrito = (producto) => {
//         setCarrito([...carrito, producto]);
//     };

//     return (
//         <>
//             {/* <Productos productos={productos} agregarCarrito={agregarCarrito} /> */}
//             <Productos />
//             <Carrito />
//         </>
//     );
// };

// export default Inicio;
