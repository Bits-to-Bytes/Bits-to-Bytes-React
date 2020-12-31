import "./eventpage.css";

const Speaker = () => {
  return (
    <div className="speaker">
      <div className="profile">
        <img src="./assets/events/speaker.jpeg" alt="speaker img" />
      </div>
      <div className="info">
        <h1 className="title">Anuj Garg</h1>
        <p className="about-event">
          Anuj Garg is Founder of Code for Cause and Coding Junior.
          Organisations which make students oriented towards targets that really
          matters. He is open source enthusiast. He is part of JBoss Community
          from 5 years wearing different hats like GSoC and GCI admin etc to
          engage more and more college students into JBoss ecosystem and Open
          Source Community.
        </p>
      </div>
    </div>
  );
};

export default Speaker;
