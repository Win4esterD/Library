import './favorites.scss';

const Favorites = () => {
    return(
      <section className="favorites">
        <h2 className="favorites__header section-header">
          Favorites
        </h2>
        <img className='separation-line favorites__separation-line' src="./assets/img/icons/line.svg" alt="separation line" />
        <p className="favorites__pick">
          Pick favorites of season
        </p>
        <div className="favorites__seasons">
          <div className="favorites__button-wrapper">
            <input className="favorites__radio" defaultChecked type="radio" name="season" id="winter-button" />
            <label className="favorites__radio-label" id="favorites__radio-label_checked" htmlFor="winter-button">Winter</label>
          </div>

          <div className="favorites__button-wrapper">
            <input className="favorites__radio" type="radio" name="season" id="spring-button" />
            <label className="favorites__radio-label" htmlFor="spring-button">Spring</label>
          </div>

          <div className="favorites__button-wrapper">
            <input className="favorites__radio" type="radio" name="season" id="summer-button" />
            <label className="favorites__radio-label" htmlFor="summer-button">Summer</label>
          </div>

          <div className="favorites__button-wrapper">
            <input className="favorites__radio" type="radio" name="season" id="autumn-button" />
            <label className="favorites__radio-label" htmlFor="autumn-button">Autumn</label>
          </div>
        </div>
      </section>
    )
}

export default Favorites;