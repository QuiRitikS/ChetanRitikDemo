import React, { useState } from "react";
import validator from "validator";

const LoginForm = () => {
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
      } else {
        setError((error) => ({
          ...error,
          password: "Valid Password is Required",
        }));
      }
    } else {
      setError((error) => ({ ...error, email: "Valid Email is Required" }));
    }

    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }

    if (data) {
      switch (data.role) {
        case "Tenant Admin":
          return <AdminDashboard />;
        case "Owner":
          return <OwnerDashboard />;
        case "Contributor":
          return <ContributorDashboard />;
        case "Viewer":
          return <ViewerDashboard />;
        default:
          return <p>Invalid role</p>;
      }
    }
    const AdminDashboard = () => (<div><h1>Welcome Admin!</h1><p>This is your dashboard</p></div>);

    const OwnerDashboard = () => (<div><h1>Welcome Owner!</h1><p>This is your dashboard</p></div>);

    const ContributorDashboard = () => (<div><h1>Welcome Contributor!</h1><p>This is your dashboard</p></div>)

    const ViewerDashboard = () => (<div><h1>Welcome Viewer!</h1><p>This is your dashboard</p></div>)
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
        >
          Login
        </button>
        {/* <div className='signup-el'><a href=''> Sign Up</a></div> */}
      </form>
    </>
  );
};

export default LoginForm;
