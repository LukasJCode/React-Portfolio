import "./index.scss";
import Carousel from "../Carousel";
import Footer from "../Footer";
import HomeLink from "../HomeLink";
import { useParams } from "react-router-dom";
import ProjectData from "../../data/projectdata";

const Project = () =>{
    const { id } = useParams();
    return (
        <div>
            <div className="home-logo">
            <HomeLink/>
            </div>
            
            <div className="project-title">
                <h1>{ProjectData[id-1].title}</h1>{" "}
            </div>
            <Carousel
                id={id-1}
            />
            
            <div className="project-description">
                <p>{ProjectData[id-1].description}</p>{" "}
            </div>
            <Footer/>
        </div>
    )
}

export default Project;