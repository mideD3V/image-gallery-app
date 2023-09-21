import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { AiFillEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import Home from "./Home";
import { useNavigate } from "react-router-dom";





const Login = () => {
const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleLogin() {
    if (username === "user@example" && password === "1Password") {
      console.log("Correct");
      // <Route path="/home" element={<Home />} />;
      return navigate('/home')
    }
    console.log("ERROR!!!");
  }

  return (
    <div id="login">
      <p> Welcome Back Here! </p>

      <form action="submit" method="get">
        <label>
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <AiOutlineUser className="input-icon" />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <AiFillEyeInvisible className="input-icon" />
        </label>
        <button type="button" onClick={handleLogin}>
          Login{" "}
          <span>
            {" "}
            <BiLogInCircle />{" "}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Login;
