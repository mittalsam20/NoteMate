import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
