import logo from "./logo.svg";
import "./App.css";
import Login from "./login.js";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const propsPass = (prev) => {
    console.log(prev, "app");
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <input placeholder="Name" onChange={handleChange} />

      <Login myName={name} pass={propsPass}>
        <h3>put in ur details!</h3>
      </Login>
    </div>
  );
}

export default App;
