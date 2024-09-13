import "./index.scss";
import ProfilePicture from "../../assets/images/LJ-New.png";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-lg-6 home-text">
          <h1 className="home-header">Lukas Jurgilas</h1>
          <h5>Software Engineer</h5>
          <p>
            "Continuous improvement is better than delayed perfection" - Mark
            Twain
          </p>
          <a href="/React-Portfolio/docs/PortfolioResume.pdf" target="_blank">
            <button type="button" className="btn btn-dark btn-lg home-buttons">
              <ArticleIcon /> View Resume
            </button>
          </a>
          <Link to="#contact">
            <button
              type="button"
              className="btn btn-outline-light btn-lg home-buttons"
            >
              <ContactMailIcon />
              Contact
            </button>
          </Link>
        </div>
        <div className="col-lg-6">
          <img className="home-image" src={ProfilePicture} alt="Profile"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
