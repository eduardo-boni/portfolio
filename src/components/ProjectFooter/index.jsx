import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { Footer } from "./style";

const ProjectFooter = () => {
  return (
    <>
      <Footer>
        <div className="contact">
          <p>Whatsapp: (24) 99221-4906</p>
          <p>E-mail para contato: eduardoishimura@gmail.com</p>
          <p>Desenvolvido por Eduardo Motta Ishimura 2022.</p>
        </div>
        <div className="social-icon">
          <a href="https://www.github.com/eduardo-boni">
            <GoMarkGithub />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-ishimura/">
            <BsLinkedin />
          </a>
        </div>
      </Footer>
    </>
  );
};

export default ProjectFooter;
