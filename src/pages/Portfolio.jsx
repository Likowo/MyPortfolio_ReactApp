export default function Portfolio(props) {
  return (
    
    //  <h1>This is the Portfolio page </h1> 
    //Insert carousel logic fron bootstrap. NB: Chose images of same size to display or customize to same size using css/
    //

    <div className="portfolio" >

      <div id="carouselExampleCaptions" className="carousel slide">
        {/* In a div, Create indicator buttons (  from indext 0 to 2) that let users jump directly to a particular slide.*/}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0} 
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        {/* In a seccond div, put 3 images in 3 img tag, a h5  with <a> tag to pull in project link ( github link), a <p> tag to briefly describe project */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://m.media-amazon.com/images/I/41nDdywsNPL._UC256,256_CACC,256,256_.jpg" className="icons" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5> Checkout This project </h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-V5yX6XvFUENVdP5.png" className="icons" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5> Checkout This project</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://thumbs.dreamstime.com/b/angel-20352501.jpg" className="icons" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5> Checkout This project </h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          {/* In a 3rd div, Make 2 angle buttons to control movement from slide to slide  */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
  );
}
