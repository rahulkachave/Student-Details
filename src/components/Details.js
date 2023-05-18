import { NavLink } from 'react-router-dom';
import React, { useRef, useState } from 'react';
const Details = () => {

const emailRef = useRef(null);
const passwordRef = useRef(null);
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();

  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '' || password === '') {
    setErrorMessage('Please fill in all fields');
  } else if (!emailRegex.test(email)) {
    setErrorMessage('Please enter a valid email address');
  } else if (password.length < 6) {
    setErrorMessage('Password must be at least 6 characters long');
  } else {
    setErrorMessage('Login successful!');
  }
};

return (
  <div className='page'>
  <form id="login-form" onSubmit={handleSubmit}>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" ref={emailRef} />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" ref={passwordRef} />
    <br />
    <input type="submit" value="Login" />
    {errorMessage && <p>{errorMessage}</p>}
    <button><NavLink to={'/About'}>aboutbutn</NavLink></button>
  </form></div>
);
};
export default Details