import React from 'react'
import { Link } from 'react-router-dom';

function Menu() {
    return (
      <ui>
        <li>
          <Link to="/red">Red</Link>
        </li>
        <li>
          <Link to="/blue">Blue</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ui>
    );
}

export default Menu;
