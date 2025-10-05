import "./App.css";
import ListaProductos from "./Components/ListaProductos/ListaProductos";
import Nav from "./Components/Nav/Nav";
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle";

function App() {
    return (
        <>
            {/* <ThemeToggle /> */}
            <Nav />
            <ListaProductos />
        </>
    );
}

export default App;
