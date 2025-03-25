// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../assets/logo.jpg'; // Make sure the logo is in your assets folder

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="navbar">
            {/* Logo Section */}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* The Outlet is where nested route components will be rendered */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
