import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { loginUser } from '../api'; // Assure-toi que le chemin est correct

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      onLogin(user);
      navigate('/')
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  console.log(email,password)

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Logins</button>
      </form>
    </div>
  );
};

export default Login;