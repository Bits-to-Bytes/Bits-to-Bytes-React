import './teampage.css';

const TeamPage = () => {
    return (
        <div className="team-page">
            <h1 className="title">The BitsToBytes Team</h1>
            <p className="info">Passionate students and faculty staff driving the success of the program.</p>
            <p className="info">We are One</p>
            <div className="profile-section">
                <ProfileCard
                    image="./assets/team/vedant.png"
                    name="Vedant Jotangiya"
                    title="Managerial Lead"
                    linkedIn="http://www.linkedin.com/in/vedantjot"
                    instagram="http://www.instagram.com/vedantjot"
                    github="http://github.com/vedantjot"
                    twitter="http://twitter.com/vedantjot"
                />
                <ProfileCard
                    image="./assets/team/neel.png"
                    name="Neel Gorasiya"
                    title="Technical Lead"
                    linkedIn="http://www.linkedin.com/in/gorasiyaneel"
                    instagram="http://www.instagram.com/neelg_2904"
                    github="http://github.com/Neel2904"
                    twitter="http://twitter.com/Neel_2904"
                />
                <ProfileCard
                    image="./assets/team/ishita.png"
                    name="Ishita Keshawani"
                    title="Executive Member"
                    linkedIn="http://www.linkedin.com/in/ishitakeshawani"
                    instagram="http://www.instagram.com/ishitakeshawani"
                    github="http://github.com/ishitakeshawani"
                    twitter="http://twitter.com/ishitakeshawani"
                />
                <ProfileCard
                    image="./assets/team/miten.png"
                    name="Miten Gajjar"
                    title="Executive Member"
                    linkedIn="http://www.linkedin.com/in/mitengajjar"
                    instagram="http://www.instagram.com/_.mi10._/"
                    github="http://github.com/GajjarMiten"
                    twitter="http://twitter.com/GajjarMiten"
                />
                <ProfileCard
                    image="./assets/team/aum.png"
                    name="Aum Joshi"
                    title="Executive Member"
                    linkedIn="http://www.linkedin.com/in/aum-joshi"
                    instagram="http://www.instagram.com/aumjoshi_"
                    github="http://github.com/aumjoshi"
                    twitter="http://twitter.com/aumjoshi"
                />
                <ProfileCard
                    image="./assets/team/yashvi.png"
                    name="Yashvi Patel"
                    title="Executive Member"
                    linkedIn="http://www.linkedin.com/in/patelyashvi"
                    instagram="http://www.instagram.com/yashviwithawhy"
                    github="http://github.com/patelyashvi"
                    twitter="http://twitter.com/YashviP97470687"
                />
            </div>
            <h1 className="authority title">Board of authority</h1>
            <div className="authority profile-section">
                <FacultyCard
                    image="./assets/faculty/pc.png"
                    name="Prof.(Dr.) G.P Vadodaria"
                    title="Pricipal, GEC, Bhavnagar"
                    position=""
                />
                <FacultyCard
                    image="./assets/faculty/fc.png"
                    name="Prof. Karshan Kandoriya"
                    title="Faculty Advisor"
                    position="HoD, Department of Computer Engineering, GEC, Bhavnagar"
                />
                <FacultyCard
                    image="./assets/faculty/fa.png"
                    name="Prof. Chinmay Vyas"
                    title="Faculty Coordinator"
                    position="Assistant Professor, Department of Computer Engineering, GEC, Bhavnagar"
                />
            </div>
        </div >
    );
}

export default TeamPage;


const ProfileCard = ({ image, name, title, linkedIn, github, instagram, twitter }) => {
    return (
        <div className="profile-card">
            <div className="circle"></div>
            <div className="profile-circle">
                <img src={image} alt="" />
            </div>
            <p className="name">{name}</p>
            <p className="title">{title}</p>
            <div className="social-media">
                <a href={linkedIn} >
                    <img src="./assets/icons/linkedin.png" alt="" />
                </a>
                <a href={twitter}>
                    <img src="./assets/icons/twitter.png" alt="" />
                </a>
                <a href={github}>
                    <img src="./assets/icons/github.png" alt="" />
                </a>
                <a href={instagram}>
                    <img src="./assets/icons/instagram.png" alt="" />
                </a>
            </div>
        </div>
    );
}


const FacultyCard = ({ image, name, title, position }) => {
    return (
        <div className="profile-card">
            <div className="circle"></div>
            <div className="profile-circle">
                <img src={image} alt="" />
            </div>
            <p className="name">{name}</p>
            <p className="title">{title}</p>
            <p className="position">{position}</p>
        </div>
    );
}