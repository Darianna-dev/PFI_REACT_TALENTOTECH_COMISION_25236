import React from "react";
import "./Nav.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = () => {
    return (
        <>
            <header className="header">
                <img
                    src="/svg-logo-for-daga-shopping-Black.png"
                    alt="Logo Daga Shopping"
                    className="logo"
                />
                <div className="nav-btn">
                    <button>Inicio</button>
                    <button>Categoria</button>
                    <button>Contacto</button>
                </div>
                <div className="nav-btn">
                    <button>Buscar</button>
                    <button className="cart-btn">Carrito</button>
                    <ThemeToggle />
                </div>
            </header>
        </>
    );
};

export default Nav;
