import "./navbar.css";
import logo from './/logo.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
      <span className="logo" style={{ display: 'inline-block', verticalAlign: 'middle', paddingTop: '10px', paddingBottom: '10px' }}>
      <img src={logo} alt="Logo" className="logoImage" style={{ width: '40px', height: 'auto',verticalAlign: 'middle', marginRight: '10px' }} />
      <span className="logoText" style={{ verticalAlign: 'middle' }}>OneClick</span>
    </span>
    </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
