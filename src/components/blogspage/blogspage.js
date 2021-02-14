import BlogCard from './blogcard';
import './blogspage.css';

const BlogsPage = () =>{
    return(
        <div>
            <h1 className="title"> Blogs </h1>  
            <div className="blogs-page" id="blogs">
            <BlogCard image="./assets/blogs/git.jpeg" title="Launch Event of Bits To Bytes" info="In this blog, We will talk about the launch event of the Bits to Bytes programming club of GEC Bhavnagar.." link="https://medium.com/bitstobytes/launch-event-of-bits-to-bytes-f6fb6d1d7999" />
            <BlogCard image="./assets/blogs/launch.png" title="Learn Git and Github in 5 minutes" info="In this blog,We will learn to use Git and  Github and more about open-source and version control.." link="https://medium.com/bitstobytes/learn-git-and-github-in-5-minutes-1f8047839e2"/>
        </div>
        </div>
    );
}


export default BlogsPage;