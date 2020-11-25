import './techpage.css'

const TechPage = () => {
    return (
        <div className="tech-page">
            <h1 className="title">Technologies We're Excited About</h1>
            <p className="info">Oppertunity to learn & access deep technical content.</p>
            <TechCard
                image="./assets/b2b3.png"
                title="Android Development"
                info="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development."
                link="https://codelabs.developers.google.com/?cat=Android"
                isOdd={true}
            />
            <TechCard
                image="./assets/b2b4.png"
                title="Web Development"
                info="Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience."
                link="https://codelabs.developers.google.com/?cat=Web"
                isOdd={false}
            />
            <TechCard
                image="./assets/b2b5.png"
                title="Cloud Computing"
                info="For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to ridges gaps between data, insight, and action."
                link="https://codelabs.developers.google.com/?cat=Cloud"
                isOdd={true}
            />
            <TechCard
                image="./assets/b2b6.png"
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
                <div className="img"><img src={image} alt="text" /></div>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="info">{info}</p>
                    <button href={link} >
                        <p>CodeLabs</p>
                        <i className="fas fa-arrow-right"></i>
                    </button>
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
                <div className="img"><img src={image} alt="text" /></div>
            </div>
        );

    }

}
