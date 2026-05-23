export default function Home({ user }) {
    return (
        <div>
            <h2>Bienvenido {user ? user.username : ""}!</h2>
            {user && <p>Tu rol es: {user.roles[0]}</p>}
            {!user && <p>Por favor inicia sesión</p>}
        </div>
    );
}