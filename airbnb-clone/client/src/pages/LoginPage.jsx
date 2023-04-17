import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert("Login successfuls")
            setRedirect(true);
        } catch (e) {
            alert("Login failed")
        }
    }
    if (redirect) {
        return <Navigate to="/" />
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-center text-4xl mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="primary py-2">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link to="/register" className="underline text-black">Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}