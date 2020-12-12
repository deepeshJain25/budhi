import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [img, setImg] = useState("");

  const handleChange = (e, para) => {
    const value = e.target.value;
    if (para === "email") {
      setLoginDetails({ email: value, password: loginDetails.password });
    } else if (para === "password") {
      setLoginDetails({ password: value, email: loginDetails.email });
    }
  };

  const handleSubmit = (details) => {
    console.log(details);
    const email = details.email;
    const pwd = details.password;
    if (email === "dj" || (email === "budhi" && pwd === "kasol")) {
      setMsg("Login Succesful !! Lets get high ");

      axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
        props.pass(res.data);
        setImg(res.data.message);
      });
    } else {
      setImg("");
      setMsg("Fuck off !!!");
    }
  };

  return (
    <div>
      {props.children}
      <p>
        Hello <strong>{props.myName}</strong>
      </p>
      <input
        placeholder="email"
        onChange={(e) => handleChange(e, "email")}
      ></input>
      <br />
      <br />
      <input
        placeholder="password"
        onChange={(e) => handleChange(e, "password")}
      ></input>
      <br />
      <br />
      <button onClick={() => handleSubmit(loginDetails)}>Login</button>
      <p>{msg}</p>
      {img !== "" && <p>image is present</p>}
      <img src={img} />
    </div>
  );
};

export default Login;
