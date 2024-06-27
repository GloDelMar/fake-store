import { Link, Outlet, useNavigate } from "react-router-dom"

const links = [
    {to: '/', label: 'Home', authRequired: false},
    {to: '/productos', label: 'Products', authRequired: true},
    {to: '/login', label: 'Login', authRequired: false},
]

export default function MainLayout() {
    const isAuth = !!localStorage.getItem("token") 
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("token"),
        navigate("/")
    }
    
    return (
        <main className="h-full min-h-dvh">
            <nav className="bg-white/50 flex flex-row justify-around text-lg font-semibold">
                {links.map((link) => {
                    if (link.authRequired && !isAuth) return null
                    if(isAuth && link.to === "/login") return null
                    return (
                        <Link key={`link-${link.to}`} to={link.to} className="hover:bg-black/50 rounded w-full h-full text-center p-2 cursor-pointer">
                            {link.label}
                        </Link>
                    );
                })}
                {isAuth && (
                    <button 
                    onClick={handleLogout}
                    className="hover:bg-black/50 rounded w-full h-full text-center p-2 cursor-pointer">Logout</button>
                )}
            </nav>
            <Outlet />
            <footer className="w-full bg-teal-500 text-center text-black">Este es el footer</footer>
        </main>
    )
}


