import "./index.scss";

const PageHeader = (props) =>{
    return (
        <div>
            <h2 className="page-header">{props.text}</h2>
        </div>
    )
}

export default PageHeader;