import { Header } from "./style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Header>
        <h1>Portfólio</h1>
        <nav className="navigation">
          <Link to="/">Início</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/project">Projetos</Link>
        </nav>
      </Header>
    </>
  );
};

export default NavBar;
