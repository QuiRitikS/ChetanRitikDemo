import React, { useState } from 'react';

const LoginForm = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
const [formData, setFormData ] = {
  emai
}
 const [error, setError] = useState('');

 const handleSubmit = async (event) => {
   event.preventDefault();
   try {
     const response = await fetch('/api/login/', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
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
 };

 return (
   <form onSubmit={handleSubmit}>
     <div>
       <label htmlFor="email">Email:</label>
       <input
         type="email"
         id="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
     </div>
     <div>
       <label htmlFor="password">Password:</label>
       <input
         type="password"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
       />
     </div>
     {error && <div>{error}</div>}
     <button type="submit">Submit</button>
   </form>
 );
};

export default LoginForm;