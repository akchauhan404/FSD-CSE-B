import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        background: "#222",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", marginRight: "20px" }}
        />
      </Link>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/work" style={{ color: "white" }}>
        Work
      </Link>
      </nav>
  );
}
export default navbar;
