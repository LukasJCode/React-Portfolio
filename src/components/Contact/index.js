import "./index.scss";
import PageHeader from "../PageHeader";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Contact = () =>{
    return (
        <div id="contact" className="contact-container">
            <PageHeader
                text={"Contact"}
            />
            <div>
                <div className="contact-form">
                    <form>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" id="firstName" placeholder="First Name" autoComplete="off"/>
                            </div>
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" autoComplete="off"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input type="email" className="form-control" id="email" placeholder="Contact Email" autoComplete="off"/>
                            </div>
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" id="companyName" placeholder="Company Name" autoComplete="off"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" id="message" rows="5" placeholder="Type your message here..."/>
                        </div>
                        <button type="submit" className="btn btn-light btn-lg home-buttons"><EmailOutlinedIcon/> Submit</button>
                    </form>
                </div>
                <div className="contact-icons">
                    <div>
                        <a href="https://www.facebook.com/lukas.jurgilas.98"><FacebookIcon style={{ fontSize: 70, color:"white" }}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/LukasJCode"><GitHubIcon style={{ fontSize: 70, color:"white" }}/></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/lukas-jurgilas/"><LinkedInIcon style={{ fontSize: 70, color:"white" }}/></a>
                    </div>
                </div>
            </div>
            <button className="arrow"><a href="/"><ArrowUpwardOutlinedIcon style={{ fontSize: 50, color:"#f24a72" }} /></a></button>
        </div>
    )
}

export default Contact;