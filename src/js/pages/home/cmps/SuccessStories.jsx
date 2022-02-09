import { CardsList } from './CardsList';
import bgPattern1 from '../../../../assets/images/home/bg-pattern-home-4-about-3.svg';
import bgPattern2 from '../../../../assets/images/home/bg-pattern-home-5.svg';


export function SuccessStories() {

    return (
        <section className="success-stories">
            <div className="main-layout">
                <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                <CardsList cardType='stories' />
            </div>
            <img src={bgPattern1} alt="Pattern" className="pattern-1" />
            <img src={bgPattern2} alt="Pattern" className="pattern-2" />
        </section>
    )
}