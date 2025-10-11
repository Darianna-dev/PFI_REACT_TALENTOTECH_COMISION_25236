import { useState, useEffect } from "react";
import "./ListaProductos.css";
import { NavLink } from "react-router-dom";

const ListaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");

                if (!response.ok) {
                    throw new Error(`Error al obtener los productos. Estado: ${response.status}`);
                }

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

    return (
        <>
            <h1>Productos</h1>
            <section className="container">
                {productos.map((producto) => (
                    <NavLink
                        to={`/producto/${producto.id}`}
                        key={producto.id}
                        className="card-link"
                    >
                        <div className="card">
                            <img src={producto.image} alt={producto.title} />
                            <h4>
                                {producto.title.length > 40
                                    ? producto.title.slice(0, 40) + "..."
                                    : producto.title}
                            </h4>
                            <h5>Price: ${producto.price}</h5>
                            <button>Ver Detalle</button>
                        </div>
                    </NavLink>
                ))}
            </section>
        </>
    );
};

export default ListaProductos;
