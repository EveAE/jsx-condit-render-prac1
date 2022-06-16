import React from "react";

function Register() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
