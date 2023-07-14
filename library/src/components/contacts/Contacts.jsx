import './contacts.scss'

const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__header section-header">
        Our Contacts
      </h2>
      <img className="separation-line contacts__separation-line" src="./assets/img/icons/line.svg" alt="line" />
      <div className="aligner">
        <div className="contacts__adress-and-map">
          <div className="contacts__adress">
            <p className="contacts__adress-header">For all Library inquiries:</p>
            <div className="contacts__inquiries-wrapper">
              <p className="contacts__adress-and-number">Please call <a className="contacts__link" href="(617) 730-2370">(617) 730-2370</a></p>
              <p className="contacts__adress-and-number">For TTY service, please call <a className="contacts__link" href="tel:+(617) 730-2370">(617) 730-2370</a></p>
              <p className="contacts__adress-and-number">Putterham Library: <a className="contacts__link" href="tel:+(617) 730-2385">(617) 730-2385</a></p>
            </div>
            <div className="contacts__staff-wrapper">
              <p className="contacts__adress-header">Senior Staff</p>
              <p className="contacts__adress-and-number">Library Director: <a className="contacts__link contacts__director" href="mailto: AmandaHirst@gmail.com">Amanda Hirst</a></p>
            </div>
          </div>
          <a className="contacts__map" href="https://www.google.com/maps/place/286+Cadman+Plaza+W,+Brooklyn,+NY+11201,+USA/@40.6952685,-73.9916289,19z/data=!4m6!3m5!1s0x89c25a49b649b8c3:0x6342a2291cea2e!8m2!3d40.6956458!4d-73.9912976!16s%2Fg%2F11s2lgz8ns?entry=ttu"><img src="./assets/img/other/map.png" alt="map" /></a>
        </div>
      </div>
    </section>
  )
}

export default Contacts;