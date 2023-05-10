import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import JavaScript from "../assets/img/JavaScript.png";
import Python from "../assets/img/Python.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Me</h2>
                        <p>I'm a very ambitious front-end developer looking for a role in an
                         international company <br></br> with the opportunity to work with the latest
                          technologies on challenging and diverse projects.
                          <br></br>I'm quiet confident, naturally curious, and perpetually working on
                          improving my chops one design problem at a time.
                          </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}