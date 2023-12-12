import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <p>Fiszki</p>
      </Link>

      <Link to="/">
        <button>Kategorie</button>
      </Link>
    </div>
  );
};

export default Header;
