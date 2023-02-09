import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Entry, setEntry] = useState("");
  const [error, setError] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    setError({});

    if (validator.isEmail(email)) {
      if (
        validator.isStrongPassword(password, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        const newEntry = { email: email, password: password };
        // send this to fetch api for backend process
        setEntry([...Entry, newEntry]);
        console.log(Entry);
        setEmail("");
        setPassword("");
        props.onLoginData(newEntry);
        if (email === "ritik@gmail.com") {
          navigate("/Admin");
        } else if (email === "owner@gmail.com") {
          navigate("/Owner");
        } else {
          alert("Error 404");
        }
      } else {
        setError((error) => ({
          ...error,
          password: "Valid Password is Required",
        }));
      }
    } else {
      setError((error) => ({ ...error, email: "Valid Email is Required" }));
    }
    // Code For API
    // try {
    //   const response = await fetch("/api/login/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   if (!response.ok) {
    //     throw new Error(response.statusText);
    //   }
    //   const data = await response.json();
        // if (data.email === "ritik@gmail.com") {
        //   navigate("/Admin");
        // } else if (data.email === "owner@gmail.com") {
        //   navigate("/Owner");
        // } else {
        //   navigate("/Error")
        // }
    // } catch (error) {
    //   setError(error.message);
    // }
  };
  return (
    <>
      <form className="loginform-card" action="" method="POST">
        <h2 className="form-heading">Login</h2>
        <div className="input-el">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {error.email && <p className="error-el">{error.email}</p>}
        </div>

        <div className="input-el">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {error.password && <p className="error-el">{error.password}</p>}
        </div>
        <div className="forget-el">Forget Password?</div>
        {/* {error && <div>{error}</div>} */}
        <button
          className="login-btn"
          type="submit"
          disabled={!email || !password}
          onClick={submitForm}
        >
          Login
        </button>
        {/* <div className='signup-el'><a href=''> Sign Up</a></div> */}
      </form>
    </>
  );
};

export default LoginForm;
