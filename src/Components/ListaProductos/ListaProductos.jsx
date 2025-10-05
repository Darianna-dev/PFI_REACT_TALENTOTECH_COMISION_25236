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
        <section className="container">
            {productos.map((producto) => (
                <div className="card">
                    <img src={producto.image} alt={producto.title} />
                    <h2 key={producto.id}>{producto.title}</h2>
                    <h3>Price: ${producto.price}</h3>
                    <input type="button" value="Comprar" />
                </div>
            ))}
        </section>
    );
};

export default ListaProductos;
