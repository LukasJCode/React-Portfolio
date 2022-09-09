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
                    <p>"Continuous improvement is better than delayed perfection" - Mark Twain</p>
                    <a href="/docs/PortfolioResume.pdf" target="_blank"><button type="button" className="btn btn-dark btn-lg home-buttons"><ArticleIcon/> View Resume</button></a>
                    <a href="#contact"><button href="#contact" type="button" className="btn btn-outline-light btn-lg home-buttons"><ContactMailIcon/>Contact</button></a>
                </div>
                <div className="col-lg-6">
                    <img className="home-image" src={ProfilePicture} alt="Profile"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;