import React, { useState } from "react";
import validator from "validator";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [Entry, setEntry] = useState("");
  const [error, setError] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    setError({});

    try {
      const response = fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }

    if (validator.isEmail( formData.email )) {
      if (
        validator.isStrongPassword(formData.password, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        const newEntry = { email: formData.email, password: formData.password };
        // send this to fetch api for backend process
        setFormData([...formData, newEntry]);
        console.log(setFormData);
        setFormData.email("");
        setFormData.password("");
      } else {
        setError((error) => ({
          ...error,
          password: "Valid Password is Required",
        }));
      }
    } else {
      setError((error) => ({ ...error, email: "Valid Email is Required" }));
    }
  };

  return (
    <>
      <form
        className="loginform-card"
        action=""
        method="POST"
        onSubmit={submitForm}
      >
        <h2 className="form-heading">Login</h2>
        <div className="input-el">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={formData.email}
            onChange={(e) => setFormData(e.target.value)}
          ></input>
          {error.formData.email && (
            <p className="error-el">{error.formData.email}</p>
          )}
        </div>

        <div className="input-el">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={formData.password}
            onChange={(e) => setFormData(e.target.value)}
          ></input>
          {error.formData.password && (
            <p className="error-el">{error.formData.password}</p>
          )}
        </div>
        <div className="forget-el">Forget Password?</div>
        {/* {error && <div>{error}</div>} */}
        <button
          className="login-btn"
          type="submit"
          disabled={!formData.email || !formData.password}
        >
          Login
        </button>
        {/* <div className='signup-el'><a href=''> Sign Up</a></div> */}
      </form>
    </>
  );
};

export default LoginForm;
