import React, { useState } from 'react';
import JsonServer from '../services/JsonUsers';

const Login = () => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        const user = await JsonServer.loadUsers(username);
        if (user && user.pwd === pwd) {
            console.log('Connexion réussie');
            // Redirige l'utilisateur ou met à jour l'état de l'application ici
        } else {
            console.log('Échec de la connexion');
        }
    };

    return (
        <>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name</label>
                <input type="text" name="username" id="login" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
        </>
    );
}

export default Login;
