import React from 'react';

const FarmerNav = () => {
  return (
      <div className="Nav">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/Inventory">Inventory</a>
        </div>
        <div>
          <a href="/Logout">Logout</a>
        </div>
      </div>
  );
};

export default FarmerNav;