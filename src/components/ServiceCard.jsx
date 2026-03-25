import { Link } from "react-router-dom";
import "../styles/ServiceCard.css";

export default function ServiceCard({ id, icon, title, description }) {
  return (
    <Link to={`/services/${id}`} className="service-card">

      <span className="material-symbols-outlined">{icon}</span>

      <h3>{title}</h3>
      <p>{description}</p>

    </Link>
  );
}