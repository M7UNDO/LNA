import "../styles/ServiceCard.css"

export default function ServiceCard({icon, title, description}){
    return (
        <div className="service-card">
            <i className={icon}></i>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}