import "./index.scss";
import Logo from "../../assets/images/mainicon.png"

const HomeLink = () =>{
    return (
        <div className="logo">
            <a className="navbar-brand" href="/">
                <img src={Logo} alt="logo"></img>
            </a>    
        </div>
    )
}

export default HomeLink;