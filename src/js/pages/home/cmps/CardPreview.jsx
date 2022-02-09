

export function CardPreview({ card }) {

    
    return (
        <div className="card-preview">
            <img src={card.src} alt="Image" />
            <div className="text-container">
                <p className="body-2">{card.txt}</p>
                {card.title && <h3>{card.title}</h3>}
            </div>
            {card.quotes && <img src={card.quotes} alt="Quotes" />}
        </div>
    )
}