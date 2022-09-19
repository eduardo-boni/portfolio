import  { projects }  from "../../assets/dataBase/projects";
import { Container } from "./style";

const ProjectCard = () => {
  
  return (
      <>
        <Container>
          <h1>Projetos</h1>
          <div className="projects">
          {projects?.map((project) => (
              <div className="container" key={project.id}>
                  <div className="itens">
                      <img src={project.img} alt="project_picture"/>              
                      <h3>{project.title}</h3>
                      <p><span>Descrição: </span>{project.description}</p>
                      <p><span>Tecnologias usadas no projeto: </span>{project.tecnology}</p>
                        <a href={project.url} target="_blank" alt="projects">Visualizar</a>
                      </div>
                    </div>
          ))}
          </div>
        </Container>
      </>
  )
}

export default ProjectCard;