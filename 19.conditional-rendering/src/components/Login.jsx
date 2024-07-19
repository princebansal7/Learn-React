import React from "react";
import Input from "./Input.jsx";
function Login() {
  return (
    <form className="form">
      <Input typ="text" ph="Username" />
      <Input typ="password" ph="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
