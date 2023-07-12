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
        <div className="books">
          <div className="books__book-block">
            <p className="book_staff">Staff Picks</p>
            <hr className="book__line"/>
            <h3 className='book__name'>THE BOOK EATERS</h3>
            <p className="book__author">By Sunyi Dean</p>
            <p className="book__review">
            An unusual Sci-Fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       
            </p>
            <button className="button book__button">Buy</button>
            <img className="book__cover" src="./assets/img/books/book1.png" alt="book" />
          </div>
          <div className="books__book-block">
            <p className="book_staff">Staff Picks</p>
            <hr className="book__line"/>
            <h3 className='book__name'>THE BOOK EATERS</h3>
            <p className="book__author">By Sunyi Dean</p>
            <p className="book__review">
            An unusual Sci-Fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       
            </p>
            <button className="button book__button">Buy</button>
            <img className="book__cover" src="./assets/img/books/book1.png" alt="book" />
          </div>
          <div className="books__book-block">
            <p className="book_staff">Staff Picks</p>
            <hr className="book__line"/>
            <h3 className='book__name'>THE BOOK EATERS</h3>
            <p className="book__author">By Sunyi Dean</p>
            <p className="book__review">
            An unusual Sci-Fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       
            </p>
            <button className="button book__button">Buy</button>
            <img className="book__cover" src="./assets/img/books/book1.png" alt="book" />
          </div>
          <div className="books__book-block">
            <p className="book_staff">Staff Picks</p>
            <hr className="book__line"/>
            <h3 className='book__name'>THE BOOK EATERS</h3>
            <p className="book__author">By Sunyi Dean</p>
            <p className="book__review">
            An unusual Sci-Fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       
            </p>
            <button className="button book__button">Buy</button>
            <img className="book__cover" src="./assets/img/books/book1.png" alt="book" />
          </div>
        </div>
      </section>
    )
}

export default Favorites;