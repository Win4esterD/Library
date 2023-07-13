import './coffeShop.scss';

const CoffeShop = () => {
    return(
      <section className="coffe-shop">
        <h2 className="coffe-shop__header section-header">
          Coffee Shop
        </h2>
        <img className='separation-line coffe-shop__separation-line' src="./assets/img/icons/line.svg" alt="separation line" />
        <p className="coffe-shop__description">
        In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. 
        You can get a favorite book and read in coffee shop. our barista to cook you best coffee, and also you can try desserts from bakery.
        </p>

        <div className="menus">
          <div className="menu">
            <h3 className="menu__header">
              Coffee & Tea
            </h3>
            <div className="menu__plate">
              <p className="menu__plate-name">Cold Brew Coffee</p>
              <div className="menu__line"></div>
              <p className="menu__price">$3</p>
            </div>
            <div className="menu__plate">
              <p className="menu__plate-name">French Press Pot</p>
              <div className="menu__line"></div>
              <p className="menu__price">$5</p>
            </div>
            <div className="menu__plate">
              <p className="menu__plate-name">Espresso</p>
              <div className="menu__line"></div>
              <p className="menu__price">$2</p>
            </div>
            <div className="menu__plate">
              <p className="menu__plate-name">Cappuccino</p>
              <div className="menu__line"></div>
              <p className="menu__price">$4</p>
            </div>
            <div className="menu__plate">
              <p className="menu__plate-name">Hot Tea</p>
              <div className="menu__line"></div>
              <p className="menu__price">$2</p>
            </div>
            <div className="menu__plate">
              <p className="menu__plate-name">Cold Tea</p>
              <div className="menu__line"></div>
              <p className="menu__price">$2</p>
            </div>
          </div>
          <div className="menu">
            <h3 className="menu__header menu__header-right">
              Desserts & Cakes  
            </h3>
            <div className="menu__plate menu__plate-right">
              <p className="menu__plate-name menu__right">Forest Gateau</p>
              <div className="menu__line"></div>
              <p className="menu__price">$16</p>
            </div>
            <div className="menu__plate menu__plate-right">
              <p className="menu__plate-name menu__right">Blue Moon</p>
              <div className="menu__line"></div>
              <p className="menu__price">$16</p>
            </div>
            <div className="menu__plate menu__plate-right">
              <p className="menu__plate-name menu__right">Truffle Cake</p>
              <div className="menu__line"></div>
              <p className="menu__price">$15</p>
            </div>
            <div className="menu__plate menu__plate-right">
              <p className="menu__plate-name menu__right">Chocolate Cake</p>
              <div className="menu__line"></div>
              <p className="menu__price">$18</p>
            </div>
            <div className="menu__plate menu__plate-right">
              <p className="menu__plate-name menu__right">Poet’s Dream Cake</p>
              <div className="menu__line"></div>
              <p className="menu__price">$16</p>
            </div>
            <div className="menu__plate menu__plate-right">
              <p className="menu__plate-name menu__right">Pineapple Cake</p>
              <div className="menu__line"></div>
              <p className="menu__price">$14</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CoffeShop;