// Assets
import bgPattern6 from '../../../../assets/images/home/bg-patterns/bg-pattern-home-6-about-5.svg';


export function Ready() {

    return (
        <section className="ready flex justify-center align-center">
            <div className="flex align-center">
                <h2>Ready to get started?</h2>
                <button className="primary dark">contact us</button>
            </div>
            <img src={bgPattern6} alt="Pattern" className="bg-pattern-6" />
        </section>
    )
}