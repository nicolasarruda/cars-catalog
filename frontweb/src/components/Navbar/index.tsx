import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#car-catalog-navbar"
          aria-controls="car-catalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler"></span>
          
        </button>

        <div className="collapse navbar-collapse offset-md-2" id="car-catalog-navbar">
          <ul className="navbar-nav main-menu">
            <li>
              <a href="link" className="active">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
