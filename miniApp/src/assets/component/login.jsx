import React  from "react";
import { useState , useContext } from "react";

import MyContext from "../context/context";

function Login(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const ContextProvider = useContext(MyContext);
    const handleLogin = (e) => {
        e.preventDefault();
        ContextProvider.setUser({ username, password });
    }

    return (

    <>
    <h2>Login</h2>
    <input type="text"  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>    
    <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={handleLogin}>Login</button>
    </>
    
)
}
export default Login;