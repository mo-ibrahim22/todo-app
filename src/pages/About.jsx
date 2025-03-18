import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCode, faHeart } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h2 className="text-primary">
            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
            About This App
          </h2>
          <p className="lead text-secondary">
            This is a simple yet powerful To-Do List App built with:
          </p>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">
              <FontAwesomeIcon icon={faCode} className="me-2 text-primary" />
              React (Vite)
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faCode} className="me-2 text-primary" />
              React Router
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faCode} className="me-2 text-primary" />
              Bootstrap for Styling
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faCode} className="me-2 text-primary" />
              Axios for API Calls
            </li>
          </ul>
          <hr />
          <p className="text-muted">
            Developed with <FontAwesomeIcon icon={faHeart} className="text-danger" /> by Muhammad Ibrahim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
