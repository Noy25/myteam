import bgPattern1 from '../../../../assets/images/home/bg-pattern-home-1.svg';
import bgPattern2 from '../../../../assets/images/home/bg-pattern-home-2.svg';


export function Hero() {

    return (
        <section className="hero">
            <div className="container main-layout flex">
                <h1 className="jumbo">Find the <br /> best <span>talent</span></h1>
                <p className="text align-self-end">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                <img src={bgPattern2} alt="Pattern" className="bg-pattern-2" />
            </div>

            <img src={bgPattern1} alt="Pattern" className="bg-pattern-1" />
        </section>
    )
}