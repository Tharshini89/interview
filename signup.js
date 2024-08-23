import React, { useState } from "react";

const Signup = () => {
    const [ username, setUsername] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    function handleSignup(e) {
        e.preventDefault();
        console.log("username:", username, "email:", email, "password:", password);
    }

    return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
            <input 
                type="username" 
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername (e.target.value)} 
                required 
                />
                <input 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail (e.target.value)} 
                required 
                />
                <input 
                type="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={(e) => setPassword (e.target.value)} 
                required 
                />
                <input 
                type="password" 
                placeholder="Enter confirm password" 
                value={password} 
                onChange={(e) => setConfirmPassword (e.target.value)} 
                required 
                />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
};


export default Signup;