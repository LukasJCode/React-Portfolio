import "./index.scss";
import HomeLink from "../HomeLink";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                    <HomeLink/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="#web"><a className="nav-link" href="#web">Web</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#games"><a className="nav-link" href="#games">Games</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#about"><a className="nav-link" href="#about">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#contact"><a className="nav-link" href="#contact">Contact</a></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;