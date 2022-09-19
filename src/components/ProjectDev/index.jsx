import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { Footer } from "./style";

const ProjectDev = () => {
    return (
        <>
        <Footer>
            <div className="contact">
                <span>E-mail para contato: eduardoishimura@gmail.com</span>
                <p>Desenvolvido por Eduardo Motta Ishimura 2022.</p>
            </div>
            <div className="social-icon">
                <a href="https://www.github.com/eduardo-boni" target="_blank">
                    <GoMarkGithub/>
                </a>
                <a href="https://www.linkedin.com/in/eduardo-ishimura/" target="_blank">
                    <BsLinkedin/>
                </a>
            </div>
        </Footer>
        </>
    )
}

export default ProjectDev;