import React from "react";
import "./Inicio.css";
import ListaProductos from "../ListaProductos/ListaProductos";
import Cafe from "../Cafe/Cafe";
import { useState } from "react";

const Inicio = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        <>
            <ListaProductos agregarAlCarrito={"agregarAlCarrito"} />
        </>
    );
};

export default Inicio;
