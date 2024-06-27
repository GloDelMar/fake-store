import { Link } from "react-router-dom"

export default function HomePage () {
    return (
        <div>
        <h1 className="text-4xl font-bold text-center">Home Page</h1>
        <p className="text-center" > This is the home Page</p>
        <div>
            <Link to="/login">Login</Link>
            <Link to="/Productos">Prodcutos</Link>
            <Link to="/Productos/123">Producto</Link>
        </div>
    </div>
    )
}