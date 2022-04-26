import "./index.scss";
import PageHeader from "../PageHeader";

const About = () =>{
    return (
        <div id="about" className="about-container">
            <PageHeader
                text={"About"}
            />
            <img className="about-image" src="/images/LJ_background.jpg" alt="profile"></img>
            <div className="about-text">
                <div className="row">
                    <p className="col-lg-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                    </p>
                    <p className="col-lg-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;