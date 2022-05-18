import "./index.scss";
import PageHeader from "../PageHeader";
import Bubbles from "../Bubbles";

const Games = () =>{
    return (
        <div id="games">
            <PageHeader
                text={"Games"}
            />
            <Bubbles
                category="Games"
            />
        </div>
    )
}

export default Games;