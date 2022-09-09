import "./index.scss";
import PageHeader from "../PageHeader";
import BackgroundImg from "../../assets/images/LJ_background.jpg";

const About = () =>{
    return (
        <div id="about" className="about-container">
            <PageHeader
                text={"About"}
            />
            <img className="about-image" src={BackgroundImg} alt="profile"></img>
            <div className="about-text">
                <div className="row">
                    <p className="col-lg-6">
                        During my journey across the multiverse of educational systems I managed to gain quite a bit of
                        experience. Starting from software engineering skills and ending with knowledge of multiple
                        languages. When it comes to programming languages I had a chance to learn and even master quite a few.
                        HTML, CSS, JavaScript, Java and C# are the ones where I fell most comfortable at. However,
                        learning new one and improving my language baggage is always an option. Nowadays, I have been
                        diving deeper into web development. 
                    </p>
                    <p className="col-lg-6">
                        And to do a proper job there must also be proper tools.To create visual masterpiece that is also known 
                        as website I have been using these tools: React.js, node.js and (or) some .NET. Some 
                        of node.js libraries I worked with: Express, body-parser,passport, axios, dotenv, mongoose. During 
                        my journey as a software engineer I also had a chance to make some games and work with cutting egde 
                        technology that goes by the name of XR. For all of this Unity game engine was used.

                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris Lorem ipsum dolor sit 
                        amet, consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  */}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;