import './carousel.css';

const Carousel = () => {
    return(
      <>
        <div className="carousel">
        <img className="carousel__img" src="./assets/img/caorusel/caorusel1.png" alt="slide 1" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel2.png" alt="slide 2" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel3.png" alt="slide 3" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel4.png" alt="slide 4" />
        <img className="carousel__img" src="./assets/img/caorusel/caorusel5.png" alt="slide 5" />
      </div>
      <div className="togglers">
        <div className="togglers__external">
          <div id="toggler_active" className="togglers__toggler">
            
          </div>
        </div>
        <div className="togglers__external">
          <div className="togglers__toggler">
            
          </div>
        </div>
        <div className="togglers__external">
          <div className="togglers__toggler">
            
          </div>
        </div>
      </div>
      </>
    )
}

export default Carousel;