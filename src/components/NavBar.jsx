import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/articles">Статьи</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
