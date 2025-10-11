import "./App.css";
import ListaProductos from "./Components/ListaProductos/ListaProductos";
import Nav from "./Components/Nav/Nav";
import Inicio from "./Components/Inicio/Inicio";
import { Routes, Route } from "react-router-dom";
import DetalleProducto from "./Components/DetalleProducto/DetalleProducto";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path={"/producto/:id"} element={<DetalleProducto />} />
                <Route path="/categoria" element={<h1>Categoría</h1>} />
                <Route path="/contacto" element={<h1>Contacto</h1>} />
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </>
    );
}

export default App;
