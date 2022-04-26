import "./index.scss";
import PageHeader from "../PageHeader";
import Bubbles from "../Bubbles";

const Web = () =>{
    return (
        <div id="web">
            <PageHeader
                text={"Web"}
            />
            <Bubbles
                pageName="Web"
            />
        </div>
    )
}

export default Web;