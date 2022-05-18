import "./index.scss";
import Carousel from "../Carousel";
import Footer from "../Footer";

const Project = (props) =>{

    return (
        <div>
            <Carousel
                id={props.id}
            />
            <div className="project-title">
                <h1>{props.title}</h1>
            </div>
            <div className="project-description">
                <p>{props.description}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Project;