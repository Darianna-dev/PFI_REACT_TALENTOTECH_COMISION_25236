import React from "react";
import "./Inicio.css";
import Productos from "../Productos/Productos";
import Cafe from "../Cafe/Cafe";
import { useState } from "react";

const Inicio = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        <>
            <Productos />
        </>
    );
};

export default Inicio;
