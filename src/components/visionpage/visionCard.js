

const VisionCard = ({ icon, color, title, info }) => {
    return (
        <div className="vision-card">
            <i className={icon} style={{color:{color}}}></i>
            <p className="title">
                {title}
            </p>
            <p className="info">{info}</p>
        </div>
    );
}

export default VisionCard;