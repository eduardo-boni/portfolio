import { Container } from "./style";
import { FaHtml5, FaReact, FaGitAlt, FaJava  } from "react-icons/fa";
import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import { DiScrum, DiCompass } from "react-icons/di";
import { useState } from "react";

const Skills = () => {

  const [show, setShow] = useState(true);

    return (
        <>
        <Container>
          <h1>Habilidades</h1>
          <div className="skills-description">
            <div className="container-skills">
            <h2>Habilidades adquiridas:</h2>
            <div className="box">
              <div className="skill-box html-skill">             
                {show? <span>HTML5</span>: null}
                <FaHtml5 onClick={() => show? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box css-skill">
                {show? <span>CSS3</span>: null}
                <SiCss3 onClick={() => show? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box js-skill">
                {show? <span>JavaScript</span>: null}
                <SiJavascript onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box react-skill">
              {show? <span>React</span>: null}
               <FaReact onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box git-skill">
              {show? <span>Git</span>: null}
                <FaGitAlt onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box scrum-skill">
              {show? <span>Scrum</span>: null}
               <DiScrum onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
            </div>
            </div>
            <div className="container-skills">
            <h2>Tecnologias em Estudo:</h2>
            <div className="box">
              <div className="skill-box typescript-skill">
              {show? <span>TypeScript</span> : null}
              <SiTypescript onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box java-skill">
              {show? <span>Java</span> : null}
                <FaJava onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
              <div className="skill-box compass-skill">
              {show? <span>Compass</span> : null}
                <DiCompass onClick={() => show ? setShow(false) : setShow(true)}/>
              </div>
            </div>
            </div>
          </div>
      </Container>
        </>
    )
}

export default Skills;