import "./Header.css";
import { Link } from "react-router-dom";
import img1 from "../../../src/assets/images/logottb_download (1).png"
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="cont">
      <header className="header">
        <Link to="/">
          <div className="img1">
            <img className="img1" src={img1} alt="" />
          </div>
        </Link>
        <nav className="navbar">
          <Link to="/" className="p">Bosh sahifa</Link>
          <Link to="/shifokorlar" className="p">Shifokorlar</Link>
          <Link to="/sectionss" className="p">Bo'limlar</Link>
          <Link to="/yangiliklar" className="p">Yangiliklar</Link>
          <Link to="ish" className="p p1">Bo'sh ish o'rni</Link>
          <Link to="/qvp" className="p">Qvp</Link>
          <Link to="/contact" className="p">Aloqa</Link>
            <div class="dropdown">
              <span className='spn p'>Uz<FaAngleDown /></span>
              <div class="dropdown-content">
                <p>En</p>
                <p>Ru</p>
              </div>
            </div>

        </nav>
      </header>
    </div>
  );
};

export default Header;
