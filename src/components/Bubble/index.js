import "./index.scss";

const Bubble = (props) =>{
    var url = "/React-Portfolio/project-" + props.categoryName + "-" + props.id;
    return (
        <div className="col-lg-3 col-md-6 bubble">
            <div className="container">
                <a href={url}>
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