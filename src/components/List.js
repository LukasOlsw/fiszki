import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="box">
        <span>Quality Assurance</span>
        <Link to="/qa">
          <button>Przejdź</button>
        </Link>
      </div>

      <div className="box">
        <span>Ang Basics</span>
        <Link to="/angbasics">
          <button>Przejdź</button>
        </Link>
      </div>

      <div className="box">
        <span>Test</span>
        <Link to="/">{/* <button>Przejdź</button> */}</Link>
      </div>

      <div className="box">
        <span>Test Test test test test test</span>
        <Link to="/">{/* <button>Przejdź</button> */}</Link>
      </div>
    </div>
  );
};

export default Main;
