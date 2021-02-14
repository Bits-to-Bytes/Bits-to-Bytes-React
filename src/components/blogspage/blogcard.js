import './blogspage.css';


const BlogCard = ({image,title,info,link}) =>{
    return (
        <div className="blog-card">
            <div className="blog-image">
            <img src={image} alt="" />
            </div>
            <p className="blog-title">
                {title}
            </p>
            <p className="info">{info}</p>
            <div className="read-time">
            <a href={link} className="event-button" target="_blank" rel="noreferrer">
                        <button>
                            <p>Read More</p>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </a>
                
            </div>
        </div>
    );
}
export default BlogCard;