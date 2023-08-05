export default function Portfolio(props) {
  return (
  
    //Insert carousel logic fron bootstrap. NB: Chose images of same size to display or customize to same size using css/
    // Top  projects for now ( will be displaying  3 out of  7): (1) https://likowo.github.io/PerScholas_Responsive_Website/  (2)https://likowo.github.io/GameApp_SpaceBattle/  (3) https://likowo.github.io/Mod1_DOM_Quiz_Game_2Players/ (4) https://likowo.github.io/Space_Book_React_FinalGpwk/ (5)https://likowo.github.io/ATM_ScreenProj/ (6) https://likowo.github.io/Employee_Directory_ReactApp_useContextHook/ (7)  https://likowo.github.io/Screen_Time_Reac_tApp/

    <div className="portfolio">
         <div div className="portfolioIntro">
      <p> Hi there ! Welcome to my portfolio page! I am exicted to show you a couple of my first projects on this tech journey. My desire and goal is to help and contribute in solving day to day challenges, by building simple, beautiful and resourceful apps. Thus research,learning and development is a continous process for me. Come back often to check on improved versions of these projects and new developments. I am sure you will find something that meets one of your needs. </p>
      {/* <div>
        <a ref="https://calendly.com/amolinge17"> <button>Contact Me</button> 
        </a> 
      </div>    */}
      </div> 
   
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
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcGVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="icons"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="projectLinks">
                <a href="https://likowo.github.io/PerScholas_Responsive_Website/ ">
                  <h5 className="checkOutProject" > Checkout This project </h5>
                </a>
              </div>
              <p className="projectDescription" >A simple and resourcefull landing page for Per Scholas</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1518719028738-e7262020a932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MzczMzMyNnx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              className="icons"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
            <div className="projectLinks" >
             <a href="https://likowo.github.io/Mod1_DOM_Quiz_Game_2Players/ ">
             <h5 className="checkOutProject"> Checkout This project </h5>
             </a>
            </div>
              <p>
                Goal is to help fellow developers learn, and review basics while having fun.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1661963789382-e6fc547f967e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYW0lMjB3b3JrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="icons"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
            <div className="projectLinks" >
             <a href=" https://likowo.github.io/Space_Book_React_FinalGpwk/ ">
             <h5 className="checkOutProject"> Checkout This project </h5>
             </a>
            </div>
              <p>
                With Teamwork you can go Anywhere. This is a creative collab project.
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
