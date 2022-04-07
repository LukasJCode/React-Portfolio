import "./index.scss";
import PlaceHolder from "../../assets/images/LJ.png";

const Carousel = (props) =>{
    return (
        <div id="bubbles">
            <div className="row">
                <div className="bubbles-element col-lg-3 col-md-6">
                    <a href="/">
                        <p>Title</p>
                        <img className="bubbles-image" src={PlaceHolder} alt="Project">
                        </img>
                    </a>
                </div>
                <div className="bubbles-element col-lg-3 col-md-6">
                    <a href="/" style={{ backgroundImage: "url("+{PlaceHolder}+")"}}>
                        <p>Title</p>
                    </a>
                </div>
                <div className="bubbles-element col-lg-3 col-md-6">
                    <a href="/">
                        <p>Title</p>
                        <img className="bubbles-image" src={PlaceHolder} alt="Project">
                        </img>
                    </a>
                </div>
                <div className="bubbles-element col-lg-3 col-md-6">
                    <a href="/">
                        <p>Title</p>
                        <img className="bubbles-image" src={PlaceHolder} alt="Project">
                        </img>
                    </a>
                </div>
                <div className="bubbles-element col-lg-3 col-md-6">
                    <a href="/">
                        <p>Title</p>
                        <img className="bubbles-image" src={PlaceHolder} alt="Project">
                        </img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carousel;