import "./index.scss";
import Bubble from "../Bubble";
import webdata from "../../data/webbubbledata";
import gamesdata from "../../data/gamesbubbledata";

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

function selectPage(pageName)
{
    switch(pageName)
    {
        case "Web":
            console.log(pageName);
            webdata.map(createBubble);
            break;
        case "Games":
            gamesdata.map(createBubble)
            break;
        default:
            console.log(pageName);
    }
}

const Bubbles = (props) =>{

    return (
        <div className="bubbles">
            <div className="row">
                {(props.pageName==="Web")?webdata.map(createBubble):gamesdata.map(createBubble)}
            </div>
        </div>
    )
}

export default Bubbles;