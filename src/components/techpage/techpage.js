import './techpage.css'

const TechPage = () => {
    return (
        <div className="tech-page" id="tech">
            <h1 className="title">Technologies We're Excited About</h1>
            <p className="info">Oppertunity to learn & access deep technical content.</p>
            <TechCard
                image="https://assets3.lottiefiles.com/packages/lf20_fztluxdp.json"
                title="Android Development"
                info="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development."
                link="https://codelabs.developers.google.com/?cat=Android"
                isOdd={true}
            />
            <TechCard
                image="https://assets3.lottiefiles.com/packages/lf20_xsnsvpbs.json"
                title="Web Development"
                info="Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience."
                link="https://codelabs.developers.google.com/?cat=Web"
                isOdd={false}
            />
            <TechCard
                image="https://assets10.lottiefiles.com/packages/lf20_MA9Nta.json"
                title="Cloud Computing"
                info="For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to ridges gaps between data, insight, and action."
                link="https://codelabs.developers.google.com/?cat=Cloud"
                isOdd={true}
            />
            <TechCard
                image="https://assets2.lottiefiles.com/packages/lf20_9azkhcpb.json"
                title="Machine Intelligence"
                info="Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to utomatically learn and improve from experience without being explicitly programmed."
                link="https://codelabs.developers.google.com/?cat=TensorFlow"
                isOdd={false}
            />
        </div>
    );
}

export default TechPage;


const TechCard = ({ image, link, title, info, isOdd }) => {
    if (isOdd) {
        return (
            <div className="tech-card">
                <div className="img">
                    <lottie-player src={image} mode="bounce" background="transparent" speed="1" style={{ width: '100%', height: '100%', }} loop autoplay></lottie-player>
                </div>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="info">{info}</p>
                    <a href={link} className="event-button" target="_blank" rel="noreferrer">
                        <button>
                            <p>CodeLabs</p>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </a>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="tech-card">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="info">{info}</p>
                    <button href={link}>
                        <p>CodeLabs</p>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div className="img">
                    <lottie-player src={image} mode="bounce" background="transparent" speed="1" style={{ width: '100%', height: '100%', }} loop autoplay></lottie-player>
                </div>
            </div>
        );

    }

}
