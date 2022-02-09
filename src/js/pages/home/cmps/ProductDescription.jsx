// Cmps
import { CardsList } from './CardsList';
// Assets
import bgPattern3 from '../../../../assets/images/home/bg-patterns/bg-pattern-home-3.svg';


export function ProductDescription() {

    return (
        <section className="product-description">
            <div className="container main-layout flex">
                <h2>Build & manage distributed teams like no one else.</h2>
                <CardsList cardType='product'/>
            </div>
            <img src={bgPattern3} alt="Pattern" className="bg-pattern-3" />
        </section>
    )
}