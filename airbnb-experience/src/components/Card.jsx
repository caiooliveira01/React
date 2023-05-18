export default function Card(props) {
    
    let badgeText // Variável vazia
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            
            {
            badgeText && <div className="card--badge">{badgeText}</div> 
            /* Se o badgeText existe, a div aparece com o conteúdo */
            } 

            <img src={`../assets/${props.coverImg}`} alt="Images" className="card--image"/>
            <div className="card--stats">
                <img src="../assets/star.png" alt="Star" className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) - </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}