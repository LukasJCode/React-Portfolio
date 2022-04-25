import "./index.scss";

const Bubble = (props) =>{
    return (
        <div className="col-lg-3 col-md-6">
            <div className="container">
                <a href="/">
                    <h4 className="centered bubble-title">{props.title}</h4>
                    <p className="centered bubble-body">{props.description}</p>
                    <img className="bubble-image" src={props.img} alt="Project">
                    </img>
                </a>
            </div>
        </div>
    )
}

export default Bubble;