import './carousel.css';
import { useState } from 'react';

const Carousel = () => {
  const [value, setValue] = useState('first');
  const idName = 'toggler_active';
  const [shift, setShift] = useState({transform: 'translateX(0%)'});

    return(
      <>
        <div className="carousel">
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel1.png" alt="slide 1" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel2.png" alt="slide 2" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel3.png" alt="slide 3" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel4.png" alt="slide 4" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel5.png" alt="slide 5" />
        </div>
        <div className="togglers">
          <div className="togglers__external" onClick={
            () => {
              setValue('first');
              setShift({transform: 'translateX(0%)'});
              
            }
            }
            >
            <div id={value==='first'? idName: undefined} className="togglers__toggler">
            
            </div>
          </div>
          <div className="togglers__external" onClick={
            () => {
              setValue('second');
              setShift({transform: 'translateX(-100%)'});
            }
            }
            >
            <div className="togglers__toggler" id={value==='second'? idName: undefined}>
            
            </div>
          </div>
          <div className="togglers__external" onClick={
            () => {
              setValue('third');
              setShift({transform: 'translateX(-210%)'});
            }
            }
            >
            <div className="togglers__toggler" id={value==='third'? idName: undefined}>
            
            </div>
          </div>
        </div>
      </>
    )
}

export default Carousel;