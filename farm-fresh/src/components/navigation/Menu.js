import React from 'react';
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li onClick={close}><Link to="/" style={{ textDecoration: 'none' }}>Sign up</Link></li>
      <li onClick={close}><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>
      <li onClick={close}><Link to="/logout" style={{ textDecoration: 'none' }}>Logout</Link></li>
      <li onClick={close}><Link to="/consumer" style={{ textDecoration: 'none' }}>Store</Link></li>
      <li onClick={close}><Link to="/farmer" onClick={() => {localStorage.removeItem("token");}} style={{ textDecoration: 'none' }}>Sell Inventory</Link></li>
    </ul>
  </div>
);
