import './libraryCard.scss';

const LibraryCard = () => {
    return(
      <section className="library-card" id="library-card">
        <h2 className="section-header library-card__header">
          Digital Library Cards
        </h2>
        <img className="separation-line library-card__separation-line" src="./assets/img/icons/line.svg" alt="line" />
        <div className="aligner library-card__aligner">
          <div className="form-block">
            <h3 className="form-block__header">
              Find your Library card
            </h3>
            <div className="form-border">
              <form action="#" className="library-form">
                <div className="library-form__inputs">
                  <p className="library-form__description">
                    Brooklyn Public Library
                  </p>
                  <input className="library-form__input" type="text" placeholder="Reader's name "/>
                  <input className="library-form__input" type="text" pattern='\d{4,4}-\d{4,4}-\d{4,4}-\d{4,4}' placeholder="Card number"/>
                </div>
                <button className="library-form__button">
                  Check the card
                </button>
              </form>
            </div>
          </div>
          <div className="get-card">
            <p className="get-card__call-to-action">Get a reader card</p>
            <p className="get-card__description">
              You will be able to see a reader card after logging into account or you can register a new account
            </p>
            <div className="get-card__buttons">
              <button className="get-card__button">Sign Up</button>
              <button className="get-card__button">Log in</button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default LibraryCard;