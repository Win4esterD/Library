import './carousel.css';

const Carousel = () => {
    return(
      <div className="carousel">
        <img className="carousel__img" src="./assets/img/caorusel/caorusel1.png" alt="slide 1" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel2.png" alt="slide 2" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel3.png" alt="slide 3" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel4.png" alt="slide 4" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel5.png" alt="slide 5" />
      </div>
    )
}

export default Carousel;