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
                    <img src={profile} alt="profileImage"/>
                    <a href={curriculo} download=""><BsDownload />Currículo</a>
                </div>
                    <div className="aside">
                        <section>
                            <p>
                                Olá, me chamo Eduardo! <br/>
                                Minha relação com a tecnologia começou em 2015, quando iniciei o
                                curso Técnico em Informática, no qual, tive uma introdução em lógica e
                                linguagem de programação. Foi quando me apaixonei por tecnologia e decidi
                                trilhar o caminho da programação. Atualmente estou focando nas tecnologias 
                                voltadas ao FrontEnd, porém, estou aberto a novas oportunidades e estou buscando aprender 
                                outras tecnologias a fim de me tornar Fullstack.
                            </p>
                            <p>
                                Também gosto de brincar com design no figma, criando interfaces para projetos pessoais.
                            </p>
                        </section>
                        <section className="skills">
                            <span>
                                Hoje tenho conhecimentos em :
                                HTML5, CSS3, JavaScript, ReactJS, Redux, ContextAPI, GIT, Figma, Metodologia Ágil(SCRUM).
                            </span>
                        </section>
                        <section className="skills">
                            <span>
                                Estou estudando: TypeScript e Less.
                            </span>
                        </section>
                    </div>
            </div>
        </Container>
        </>
    )
}

export default AboutMe;