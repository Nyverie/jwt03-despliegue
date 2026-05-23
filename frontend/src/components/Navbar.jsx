export default function Navbar({ user, onLogout, onNavigate }) {
    return (
        <nav>
            <button onClick={() => onNavigate("home")}>Inicio</button>

            {!user ? (
                <button onClick={() => onNavigate("login")}>Login</button>
            ) : (
                <>
                    <button onClick={() => onNavigate("user")}>Usuario</button>
                    <button onClick={onLogout}>Cerrar sesión</button>
                </>
            )}
        </nav>
    );
}