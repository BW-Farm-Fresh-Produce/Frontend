import React from 'react';
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li onClick={close}><Link to="/UserLogin" style={{ textDecoration: 'none' }}>Log In</Link></li>
      <li onClick={close}><Link to="/" style={{ textDecoration: 'none' }}>Meet Our Servers!</Link></li>
      <li onClick={close}><Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
      <li onClick={close}><Link to="/logout" onClick={() => {localStorage.removeItem("token");}} style={{ textDecoration: 'none' }}>Log Out!</Link></li>
    </ul>
  </div>
);
