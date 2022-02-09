import { cardService } from '../../../services/card.service';


export function CardsList({ cardType }) {

    const cards = cardService.query(cardType);


    return (
        <div className="cards-list">
            {cards.map(card => {
                return (
                    <div className="card-preview" key={card.txt}>
                        <img src={card.src} alt="Image" />
                        <div className="text-container">
                            <p>{card.txt}</p>
                            {card.title && <h3>{card.title}</h3>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}