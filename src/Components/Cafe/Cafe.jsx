// Datos de productos para recomendaciones con precios en pesos argentinos
import React from "react";

const Cafe = () => {
    const productosCafe = {
        granos: [
            {
                nombre: "Arábica Colombiano Premium",
                precio: "$8.500",
                descripcion: "Notas de chocolate y caramelo, cuerpo medio",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
            },
            {
                nombre: "Blue Mountain Jamaicano",
                precio: "$22.000",
                descripcion: "Sabor suave y equilibrado, acidez brillante",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8c0 5.45 4.55 10 10 10s9-4.55 9-10L14 6z"/></svg>`,
            },
            {
                nombre: "Geisha Panameño",
                precio: "$35.000",
                descripcion: "Perfil floral único, notas de jazmín",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5z"/></svg>`,
            },
            {
                nombre: "Robusta Brasileño",
                precio: "$6.500",
                descripcion: "Intenso y con cuerpo, ideal para espresso",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7l1.5-4.5c.3-.8 1.1-1.4 2-1.4s1.7.6 2 1.4L14 11h-2l-1.5-4.5c-.1-.2-.3-.5-.5-.5s-.4.3-.5.5L9 11z"/></svg>`,
            },
        ],
        bebidas: [
            {
                nombre: "Espresso Signature",
                precio: "$2.800",
                descripcion: "Doble shot, crema perfecta, 25 segundos",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5V3z"/></svg>`,
            },
            {
                nombre: "Cappuccino Artesanal",
                precio: "$3.200",
                descripcion: "Espuma sedosa, temperatura perfecta",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h18v-2H2v2zM20 8H4V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2zm-2 2v5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-5h12z"/></svg>`,
            },
            {
                nombre: "Cold Brew Premium",
                precio: "$3.800",
                descripcion: "24 horas de extracción, concentrado puro",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M5 10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S7.33 9 6.5 9 5 9.67 5 10.5zM12 1L8 5v6c0 2.97 2.16 5.43 5 5.91V19H9v2h6v-2h-4v-2.09c2.84-.48 5-2.94 5-5.91V5l-4-4z"/></svg>`,
            },
            {
                nombre: "Latte Art Especial",
                precio: "$3.500",
                descripcion: "Con diseño personalizado, leche local",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19h16v2H4v-2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V3zm-2 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h12v8z"/></svg>`,
            },
        ],
        accesorios: [
            {
                nombre: "Molinillo Profesional",
                precio: "$35.000",
                descripcion: "Fresas cónicas, 40 niveles de molienda",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
            },
            {
                nombre: "Cafetera V60",
                precio: "$8.500",
                descripcion: "Cerámica japonesa, filtros incluidos",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11L12 2z"/></svg>`,
            },
            {
                nombre: "Taza Cerámica Premium",
                precio: "$4.800",
                descripcion: "Diseño ergonómico, retención térmica",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5V3zM16 5v3c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8z"/></svg>`,
            },
            {
                nombre: "Prensa Francesa",
                precio: "$12.500",
                descripcion: "Acero inoxidable, doble filtro",
                icono: `<svg class="w-16 h-16 mx-auto mb-4 text-coffee" fill="currentColor" viewBox="0 0 24 24"><path d="M8 2v2h8V2H8zM5 6v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6H5zm7 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
            },
        ],
    };

    return (
        <>
            <div>
                {productosCafe.granos.map((producto) => (
                    <div key={producto.nombre}>
                        <h2>{producto.nombre}</h2>
                        <h3>{producto.precio}</h3>
                        <img src={producto.icono} alt={producto.nombre} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cafe;
