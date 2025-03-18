import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand fw-bold text-light" to="/">
          <FontAwesomeIcon icon={faListCheck} className="me-2" /> To-Do App
        </Link>

        {/* Navbar Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">
                <FontAwesomeIcon icon={faHome} className="me-2" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/tasks">
                <FontAwesomeIcon icon={faListCheck} className="me-2" /> Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/about">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
