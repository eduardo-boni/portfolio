import { Container } from "./style";
import img from "../../assets/img/img.jpg";
import ProfileButton from "../../components/ProfileButton";

const HomePage = () => {
  return (
    <>
      <Container>
        <section className="description">
          <p>Oi, eu sou</p>
          <p className="animation">Eduardo Motta Ishimura !</p>
          <p className="stack">" Desenvolvedor Front-end Jr."</p>
        </section>
        <section className="profile">
          <img src={img} alt="profile_Picture" />
        </section>
        <section className="button">
          <ProfileButton />
        </section>
      </Container>
    </>
  );
};

export default HomePage;
