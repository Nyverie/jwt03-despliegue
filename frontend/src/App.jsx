import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

export default function App() {
    const [user, setUser]         = useState(null);
    const [page, setPage]         = useState("home");

    const handleLogin = (data) => {
        setUser(data);
        setPage("home");
    };

    const handleLogout = () => {
        setUser(null);
        setPage("home");
    };

    return (
        <div>
            <Navbar user={user} onLogout={handleLogout} onNavigate={setPage} />

            {page === "home"  && <Home user={user} />}
            {page === "login" && <Login onLogin={handleLogin} />}
            {page === "user"  && user && <UserPage user={user} />}
            {page === "user"  && !user && <p>Debes iniciar sesión primero</p>}
        </div>
    );
}