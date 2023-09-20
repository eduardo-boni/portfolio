import profile from "../../assets/img/profile.png";
import { Container } from "./style";
import { BsDownload } from "react-icons/bs";
import curriculo from "../../assets/curriculo.pdf";

const AboutMe = () => {
  return (
    <>
      <Container>
        <h1>Sobre min</h1>
        <div className="main">
          <div className="cv-profile">
            <img src={profile} alt="profileImage" />
            <a href={curriculo} download="">
              <BsDownload />
              Currículo
            </a>
          </div>
          <div className="aside">
            <section>
              <p>
                Olá, me chamo Eduardo! <br />
                Sou formado em desenvolvimento Front End com React pela Kenzie
                Academy Brasil em Julho de 2022 e, atualmente cursando
                Tecnologia em Sistemas de Computação pela UFF (iniciado em
                Fevereiro de 2023). Minha relação com a tecnologia começou em
                2016 com a conclusão do curso Técnico em Informática, no qual,
                tive uma introdução em lógica e linguagem de programação. Foi
                quando me apaixonei por tecnologia e decidi trilhar o caminho da
                programação. Atualmente, continuo aperfeiçoando meus
                conhecimentos no Front End e, buscando aprender novas
                tecnologias a fim de me tornar um Desenvolvedor Fullstack. Com
                tudo, estou aberto a novas oportunidades.
              </p>
              <p>
                Também gosto de brincar com design no figma, criando interfaces
                para projetos pessoais.
              </p>
            </section>
            <section className="skills">
              <span>
                Hoje tenho conhecimentos em : HTML5, CSS3, JavaScript, ReactJS,
                Redux, ContextAPI, GIT, Figma, SCRUM.
              </span>
            </section>
            <section className="skills">
              <span>Estou estudando: TypeScript, AngularJs e Java.</span>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
