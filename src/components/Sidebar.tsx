import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active text-white" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Analytics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;