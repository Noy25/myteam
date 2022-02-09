import bgPattern from '../../../../assets/images/home/bg-pattern-home-6-about-5.svg';


export function Ready() {

    return (
        <section className="ready flex justify-center align-center">
            <div className="flex align-center">
                <h2>Ready to get started?</h2>
                <button className="btn-contact">contact us</button>
            </div>
            <img src={bgPattern} alt="Pattern" className="bg-pattern" />
        </section>
    )
}