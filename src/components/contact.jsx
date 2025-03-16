export default function Contact() {
    return (
        <div className="contact-container">
            <h2>İletişim</h2>
            <div className="contact-info">
                <p><span><i className="fa-solid fa-square-envelope"></i> Mail:</span> 
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=handememikoglu@gmail.com" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="contact-text">
                        handememikoglu@gmail.com
                    </a>
                </p>
                <p><span><i className="fa-solid fa-square-phone"></i> Telefon:</span> +90 555 555 55 55</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/handememikoglu" target="blank" className="contact-icon"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/handeeyl%C3%BClmemiko%C4%9Flu/" target="blank" className="contact-icon"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://vercel.com/hande-eyluls-projects" target="blank" className="contact-icon"><i className="fa-solid fa-square-caret-up"></i></a>
            </div>
        </div>
    );
}
