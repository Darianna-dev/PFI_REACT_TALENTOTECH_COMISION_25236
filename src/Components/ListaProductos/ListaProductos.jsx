import { useState, useEffect } from "react";
import "./ListaProductos.css";

const ListaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                return response.json();
            })
            .then((data) => {
                setProductos(data);
                setCargando(false);
            })
            .catch((err) => {
                setError(err.message);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>Productos</h1>
            <section className="container">
                {productos.map((producto) => (
                    <div className="card" key={producto.id}>
                        <img src={producto.image} alt={producto.title} />
                        <h4>{producto.title}</h4>
                        <h5>Price: ${producto.price}</h5>
                        <button>Comprar</button>
                    </div>
                ))}
            </section>
        </>
    );
};

export default ListaProductos;
