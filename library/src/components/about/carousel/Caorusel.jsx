import './carousel.scss';
import { useRef, useState } from 'react';

const Carousel = () => {
  const [value, setValue] = useState('first');
  const idName = 'toggler_active';
  const [shift, setShift] = useState({transform: 'translateX(0%)'});

  const firstToggler = useRef(0);
  const secondToggler = useRef(1);
  const thirdToggler = useRef(2);

  function handleRightArrow(){
    if(value==='first'){
      secondToggler.current.click();
    }else if(value==='second'){
      thirdToggler.current.click();
    }else{
      firstToggler.current.click();
    }
  }

  function handleLeftArrow(){
    if(value==='third'){
      secondToggler.current.click();
    }else if(value==='second'){
      firstToggler.current.click();
    }else{
      thirdToggler.current.click();
    }
  }

    return(
      <>
        <div className="carousel">
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel1.png" alt="slide 1" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel2.png" alt="slide 2" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel3.png" alt="slide 3" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel4.png" alt="slide 4" />
          <img className="carousel__img" style={shift} src="./assets/img/caorusel/caorusel5.png" alt="slide 5" />
        </div>
        <div className="arrows-wrapper">
          <img className="carousel__arrow"
            onClick={handleLeftArrow}
            src="./assets/img/icons/arrow-left.svg"
            alt="arrow-left" 
            />
          <img className="carousel__arrow"
            onClick={handleRightArrow}
            src="./assets/img/icons/arrow-right.svg"
            alt="arrow-right" 
            />
        </div>
        <div className="togglers">
          <div className="togglers__external" 
            ref={firstToggler} 
            onClick={
            () => {
              setValue('first');
              setShift({transform: 'translateX(0%)'});
              
            }
            }
            >
            <div id={value==='first'? idName: undefined} className="togglers__toggler">
            
            </div>
          </div>
          <div className="togglers__external" 
            ref={secondToggler} 
            onClick={
            () => {
              setValue('second');
              setShift({transform: 'translateX(-107%)'});
            }
            }
            >
            <div className="togglers__toggler" id={value==='second'? idName: undefined}>
            
            </div>
          </div>
          <div className="togglers__external" 
            ref={thirdToggler}
            onClick={
            () => {
              setValue('third');
              setShift({transform: 'translateX(-215%)'});
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