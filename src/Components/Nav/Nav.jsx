import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = () => {
    const navigate = useNavigate();

    const volverInicio = () => {
        navigate("/"); // Navega a la página de inicio
    };

    return (
        <header className="header">
            <img
                src="/svg-logo-for-daga-shopping-Black.png"
                alt="Logo Daga Shopping"
                className="logo"
                onClick={volverInicio}
            />
            <div className="nav-btn">
                <NavLink to="/" className="nav-link">
                    Inicio
                </NavLink>
                <NavLink to="/categorias" className="nav-link">
                    Categoria
                </NavLink>
                <NavLink to="/contacto" className="nav-link">
                    Contacto
                </NavLink>
            </div>
            <div className="nav-btn">
                <NavLink to="/buscar" className="nav-link buscar">
                    <span>🔍</span>
                </NavLink>
                <button className="cart-btn">
                    <span>🛒</span>
                </button>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Nav;
