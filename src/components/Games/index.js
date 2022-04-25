import "./index.scss";
import PageHeader from "../PageHeader";
import Bubbles from "../Bubbles";

const Games = () =>{
    return (
        <div>
            <PageHeader
                text={"Games"}
            />
            <Bubbles
                pageName="Games"
            />
        </div>
    )
}

export default Games;