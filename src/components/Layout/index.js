import "./index.scss";
import Header from "../Header";
import Home from "../Home";
import Web from "../Web";
import Games from "../Games";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";

const Layout = () =>{
    return (
    <div>
        <Header/>
        <Home/>
        <Web/>
        <Games/>
        <About/>
        <Contact/>
        <Footer/>
    </div>)
}

export default Layout;