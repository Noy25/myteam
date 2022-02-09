// Cmps
import { CardsList } from './CardsList';
// Assets
import bgPattern4 from '../../../../assets/images/home/bg-patterns/bg-pattern-home-4-about-3.svg';
import bgPattern5 from '../../../../assets/images/home/bg-patterns/bg-pattern-home-5.svg';


export function SuccessStories() {

    return (
        <section className="success-stories">
            <div className="main-layout">
                <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                <CardsList cardType='stories' />
            </div>
            <img src={bgPattern4} alt="Pattern" className="bg-pattern-4" />
            <img src={bgPattern5} alt="Pattern" className="bg-pattern-5" />
        </section>
    )
}