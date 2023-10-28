import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Task Tracker</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
