import "../styles/ServiceCard.css";

export default function ServiceCard({icon, title, description}) {
  return (
    <div className="service-card">
      <span class="material-symbols-outlined">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
