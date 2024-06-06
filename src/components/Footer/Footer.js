import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div
        style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Made by{" "}
        <Link
          to="https://Mayankrunija.github.io"
          target="blank"
          style={{ cursor: "pointer" }}
        >
          Kashish & Mayank
        </Link>
      </div>
    );
  };
  
  export default Footer;
  