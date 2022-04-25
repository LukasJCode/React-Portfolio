import "./index.scss";
import PlaceHolder from "../../assets/images/LJ.png";
import Bubble from "../Bubble";
import webdata from "../../data/webbubbledata";

function createBubble(bubble)
{
    return(
        <Bubble
            key={bubble.id}
            title={bubble.title}
            description={bubble.body}
            img={bubble.img}
        />
    )
}

const Bubbles = (props) =>{

    return (
        <div className="bubbles">
            <div className="row">
                {webdata.map(createBubble)}
            </div>
        </div>
    )
}

export default Bubbles;