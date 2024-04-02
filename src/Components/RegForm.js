import React, { useState } from 'react';


const RegForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here before submitting the form
    // For example, checking if the fields are not empty

    // Once validated, you can submit the form data
    const formData = {
      username: username,
      email: email,
      password: password
    };
    console.log(formData); // You can replace this with your API call to register the user
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit">Register</button>
      </form>
    </div>
  );
};

export default RegForm;

