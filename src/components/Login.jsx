import React, { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import { BiLogInCircle, BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");


  function handleLogin() {
    if (username === "user@example" && password === "1Password") {
      console.log("Correct");
      // <Route path="/home" element={<Home />} />;
      return navigate("/home");
    } else {
      console.log("ERROR!!!");
      setErrorMessage("Wrong details. Try again");
setErrorBorder('red')
    }
  }

  return (
    <div id="login">
      <p> Welcome Back Here! </p>
      <span className="error">{errorMessage}</span>

      <form action="submit" method="get">
        <label>
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            style={
              username === "user@example"
                ? { borderColor: "green" } :
                username === "" ? { borderColor: "" }
                : { borderColor: "red" }
            }
          />
          <BiSolidUser className="input-icon" />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={
              password === "1Password"
                ? { borderColor: "green" }
                : password === ""
                ? { borderColor: " " }
                : { borderColor: "red" }
            }
          />
          <HiEyeOff className="input-icon" />
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
