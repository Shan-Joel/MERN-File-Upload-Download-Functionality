import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div className="header">
         <h1 style={{ fontWeight: 600 }}>File Upload and Download</h1>
         <nav>
            <NavLink activeClassName="active" to="/" exact={true}>
               Home
            </NavLink>
            <NavLink activeClassName="active" to="/list">
               Uploaded Files List
            </NavLink>
         </nav>
      </div>
   );
};

export default Header;
