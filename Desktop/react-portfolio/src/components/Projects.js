import { Container } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  return (
    <section className="project">
      <Container>
                <h2>Projects</h2>
                <div className="projectcard"> 
                <h3>Business Website</h3>
                <img className="project-image" src={projImg1} alt= "project image"></img>
                <p> 
                 A business website with directed-force knowledge graph.
                </p>
                </div>
                <div className="projectcard"> 
                <h3>Myreads App</h3>
                <img className="project-image" src={projImg2} alt= "project image"></img>
                <p> 
                This is a bookshelf app that lets you to organize books that you have read, want to read or currently reading.
                </p>
                </div>
                <div> 
                <h3>React & Redux Data Management App</h3>
                <img className="project-image" src={projImg3} alt= "project image"></img>
                <p> 
                React & Redux Data Management App
                </p>
                </div>
  
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}