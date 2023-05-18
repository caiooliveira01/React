export default function List({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
    return (
        <div className="travel">
            <img src={imageUrl} alt={title} className="image"/>
            <div className="content">
                <div className="heading">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="location">{location}</p>
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="loc-link">View on Google Maps</a>
                </div>
                <h2 className="title">{title}</h2>
                <p className="date">{startDate} - {endDate}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}