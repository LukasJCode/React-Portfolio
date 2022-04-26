import "./index.scss";
import ProfilePicture from "../../assets/images/LJ.png";
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Home = () =>{
    return (
        <div className="home">
            <div className="row">
                <div className="col-lg-6 home-text">
                    <h1 className="home-header">Lukas Jurgilas</h1>
                    <h5>Software Engineer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam</p>
                    <button type="button" className="btn btn-dark btn-lg home-buttons"><ArticleIcon/> View Resume</button>
                    <button type="button" className="btn btn-outline-light btn-lg home-buttons"><ContactMailIcon/> Contact</button>
                </div>
                <div className="col-lg-6">
                    <img className="home-image" src={ProfilePicture} alt="Profile"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;