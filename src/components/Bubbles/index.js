import "./index.scss";
import Bubble from "../Bubble";
import projectdata from "../../data/projectdata";

function createBubble(bubble, category)
{
    return(
        (bubble.category === category.toLowerCase())?
        <Bubble
            key={bubble.id}
            id={bubble.id}
            categoryName={bubble.category}
            title={bubble.title}
            description={bubble.shortDescription}
            img={bubble.thumbnailImg}
        />
        :
        null
    )
}

const Bubbles = (props) =>{

    return (
        <div className="bubbles">
            <div className="row">
                {projectdata.map((project)=>
                {
                    return createBubble(project, props.category)
                })}
            </div>
        </div>
    )
}

export default Bubbles;