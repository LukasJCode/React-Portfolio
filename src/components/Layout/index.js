import "./index.scss";
import Header from "../Header";
import Home from "../Home";
import Web from "../Web";
import Games from "../Games";

const Layout = () =>{
    return (
    <div>
        <Header/>
        <Home/>
        <Web/>
        <Games/>
    </div>)
}

export default Layout;