import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage({ user }) {
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/test/user", {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        })
        .then((res) => setMensaje(res.data))
        .catch(() => setMensaje("No tienes acceso"));
    }, []);

    return (
        <div>
            <h2>Página de Usuario</h2>
            <p>Respuesta del backend: <strong>{mensaje}</strong></p>
        </div>
    );
}