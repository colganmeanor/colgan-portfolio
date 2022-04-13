import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-header">
                <h1>Contact Colgan</h1> 
                <p>Any questions about me or my projects? Let me know!</p>
            </div>
            <div className="contact-details">
                <p>Contact Me via the following please:</p>
                <div className="contact-methods">
                    <p>Email: colganmeanor7@gmail.com</p>
                    <p>Phone: (334) 782-2351</p>
                    <a href='https://github.com/colganmeanor'>GitHub </a>
                    <a href='https://www.linkedin.com/in/colgan-meanor/'>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact