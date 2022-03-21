// Services
import { cardService } from '../../services/card.service';
// Cmps
import { CardPreview } from './CardPreview';


export function CardsList({ cardType }) {

    const cards = cardService.query(cardType);


    return (
        <div className="cards-list">
            {cards.map(card => <CardPreview card={card} key={card.txt}/>)}
        </div>
    )
}