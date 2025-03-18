import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faInfoCircle, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="display-4 fw-bold text-primary">
          Welcome to <span className="text-success">Your To-Do List App</span>
        </h1>
        <p className="lead text-secondary">
          Organize your tasks effortlessly and boost your productivity!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="row mt-4 w-100 justify-content-center">
        <div className="col-md-4">
          <div className="card text-center shadow-lg border-0">
            <div className="card-body">
              <FontAwesomeIcon icon={faClipboardList} size="3x" className="text-primary mb-3" />
              <h5 className="card-title fw-bold">Manage Your Tasks</h5>
              <p className="card-text text-secondary">
                Add, edit, and delete tasks easily with a smooth user experience.
              </p>
              <Link to="/tasks" className="btn btn-primary w-100">
                <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                View Tasks
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-lg border-0">
            <div className="card-body">
              <FontAwesomeIcon icon={faInfoCircle} size="3x" className="text-info mb-3" />
              <h5 className="card-title fw-bold">About This App</h5>
              <p className="card-text text-secondary">
                Learn more about the features and technologies behind this project.
              </p>
              <Link to="/about" className="btn btn-info w-100">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-5">
        <Link to="/tasks" className="btn btn-success btn-lg px-4 py-2 shadow-lg">
          <FontAwesomeIcon icon={faRocket} className="me-2" />
          Get Started Now!
        </Link>
      </div>
    </div>
  );
}

export default Home;
