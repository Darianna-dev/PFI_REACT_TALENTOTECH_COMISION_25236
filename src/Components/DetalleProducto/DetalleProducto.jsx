import { useParams } from "react-router-dom";

const DetalleProducto = ({ producto }) => {
    const { id } = useParams();
    return <h2>Este es el Producto N°: {id} </h2>;
};

export default DetalleProducto;
