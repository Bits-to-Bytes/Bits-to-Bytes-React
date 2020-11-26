import './contactpage.css'

const ContactPage = () => {
    return (
        <div className="contact-page" id="contact">
            <div className="address-box">
                <a href="https://maps.app.goo.gl/6xuVgLAcD1VvRxSW9" className="map-link"><p className="address">
                    Government Engineering College, Bhavnagar,
                    Nr. Sir BPTI Campus, Vidhyanagar, Bhavnagar,
                    Gujarat 364002, India
                    +91 278 252 5354
                </p></a>
            </div>
            <div className="social-media">
                <a href="https://linkedin.com/company/bitstobytes-gecbvn" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/linkedin.png" alt="" />
                </a>
                <a href="https://twitter.com/BitstobytesGec" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/twitter.png" alt="" />
                </a>
                <a href="https://github.com/Bits-to-Bytes" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/github.png" alt="" />
                </a>
                <a href="https://www.instagram.com/bits.to.bytes/" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/instagram.png" alt="" />
                </a>
                <a href="https://www.facebook.com/bitstobytesgecbvn" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/facebook.png" alt="" />
                </a>
                <a href="https://www.youtube.com/c/BitstoBytes" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/youtube.png" alt="" />
                </a>
            </div>
        </div>
    );
}


export default ContactPage;