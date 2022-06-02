import "./index.scss";
import Carousel from "../Carousel";
import Footer from "../Footer";
import HomeLink from "../HomeLink";

const Project = (props) =>{

    return (
        <div>
            <div className="home-logo">
            <HomeLink/>
            </div>
            
            <div className="project-title">
                <h1>{props.title}</h1>
            </div>
            <Carousel
                id={props.id}
            />
            
            <div className="project-description">
                <p>{props.description}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Project;