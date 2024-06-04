import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Menu</div>
      <div className="list-group list-group-flush">
        <NavLink to="/" className="list-group-item list-group-item-action bg-light">
          Dashboard
        </NavLink>
        <NavLink to="/reports" className="list-group-item list-group-item-action bg-light">
          Reports
        </NavLink>
        <NavLink to="/tasks" className="list-group-item list-group-item-action bg-light">
          Tasks
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
