import "./index.scss";
import PageHeader from "../PageHeader";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () =>{
    const refForm = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            "service_gmail",
            "template_1chwtpi",
            refForm.current,
            "sOhyljfLSZoMyMHKB"
        ).then(
            () => {
                alert("Message successfully sent!");
                window.location.reload(false);
            },
            () => {
                alert("Failed to send the message, please try again later");
            }
        )
    }
    return (
        <div id="contact" className="contact-container">
            <PageHeader
                text={"Contact"}
            />
            <div>
                <div className="contact-form" onSubmit={sendEmail}>
                    <form ref={refForm}>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" placeholder="First Name" name="first_name" autoComplete="off"/>
                            </div>
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" placeholder="Last Name" name="last_name" autoComplete="off"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input type="email" className="form-control" required placeholder="Contact Email*" name="contact_email" autoComplete="off"/>
                            </div>
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" required placeholder="Company Name*" name="company_name" autoComplete="off"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" rows="5" required name="message" placeholder="Type your message here...*"/>
                        </div>
                        <p className="contact-note">Fields marked with * are required</p>
                        <div className="submit-button">
                            <button type="submit" className="btn btn-light btn-lg home-buttons"><EmailOutlinedIcon/> Submit</button>
                        </div>
                    </form>
                </div>
                <div className="contact-icons">
                    <div className="contact-icon">
                        <a href="https://www.facebook.com/lukas.jurgilas.98"><FacebookIcon style={{ fontSize: 70, color:"white" }}/></a>
                    </div>
                    <div className="contact-icon">
                        <a href="https://github.com/LukasJCode"><GitHubIcon style={{ fontSize: 70, color:"white" }}/></a>
                    </div>
                    <div className="contact-icon">
                        <a href="https://www.linkedin.com/in/lukas-jurgilas/"><LinkedInIcon style={{ fontSize: 70, color:"white" }}/></a>
                    </div>
                </div>
            </div>
            <button className="arrow"><a href="/"><ArrowUpwardOutlinedIcon style={{ fontSize: 50, color:"#f24a72" }} /></a></button>
        </div>
    )
}

export default Contact;