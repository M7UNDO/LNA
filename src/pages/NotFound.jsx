import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import ErrorGraphic from "../assets/no-results.png";

function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-wrapper">
        
        <div className="notfound-left">
          <p className="notfound-label">Sorry!</p>

          <h1 className="notfound-heading">
            We can't seem to find the page you're looking for.
          </h1>

          <p className="notfound-subtext">
            Please check the URL or return to the homepage to continue exploring.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="btn-primary">
              Go Home
            </Link>

            <Link to="/practice-areas" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>

        <div className="notfound-right">
          <img 
            src={ErrorGraphic} 
            alt="Error illustration" 
            className="notfound-image"
          />
        </div>

      </div>
    </section>
  );
}

export default NotFound;