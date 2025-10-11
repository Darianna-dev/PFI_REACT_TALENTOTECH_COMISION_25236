import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./DetalleProducto.css";

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error("Error al obtener el producto");
                const data = await response.json();
                setProducto(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerProducto();
    }, [id]);

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!producto) return <p>No se encontró el producto.</p>;

    const volverInicio = () => {
        navigate("/"); // Navega a la página de inicio
    };

    return (
        <section className="detalle-container">
            <div className="card-detalle">
                <img
                    src={producto.image}
                    alt={producto.title}
                    // style={{ width: "200px", height: "200px", objectFit: "contain" }}
                />
                <h2>{producto.title}</h2>
                <p>
                    <span>Descripción:</span> {producto.description}
                </p>
                <h3>💲 {producto.price}</h3>
                <p className="categoria">Categoría: {producto.category}</p>
                <button onClick={volverInicio}>Volver</button>
            </div>
        </section>
    );
};

export default DetalleProducto;
