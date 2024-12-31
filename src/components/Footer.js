import "../components/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Explore Vista</h1>
          <p>Discover! Plan! Explore!</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Change</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
        </div>


        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
