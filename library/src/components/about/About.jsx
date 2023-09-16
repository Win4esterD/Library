import './about.scss';
import Carousel from './carousel/Caorusel';

const About = () => {
    return(
      <section className="about" id="about">
        <h2 className="about__header section-header">
          About
        </h2>
        <img className="about__separation-line separation-line" src="./assets/img/icons/line.svg" alt="line" />
        <p className="about__description section-description">
          The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside
        </p>
        <Carousel />
      </section>
    )
}

export default About;