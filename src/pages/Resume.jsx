import React from "react";
// import "./App.css";

// Use this quick and simple logic below, using anchor tag, to link to local pdf file (e.g Resume,cover letter) in a create-react-app project.
{/* <a href="\pdfname.pdf" download>
  Download Resume
</a>; */}

function Resume() {
  return (
    <div className="resumePage">
        <div className="text" > 
            <h4>Hi, click on the button below to view my resume . Will be updated based on position applying for. <br /> NB: If file not available, it is being updated. Thank you.</h4>
        </div>
    
      {/* <div className="downLoadResume">
        <a href="\Resume  Portfolio.pdf" >
          <button className="downLoadButton"> Open Resume in a new window </button>
        </a>
      </div> */}

      <div className="downLoadResume">
        <a href="\Resume in Portfolio Proj.pdf" download>
          <button className="downLoadButton" > Download Resume </button>
        </a>
      </div>

{/* 
      <div className="downLoadCoverLetter">
        <a href="\Cover letter Portfolio.pdf" download>
          <button className="downLoadButton" > Download Cover Letter </button>
        </a>
      </div> */}
    </div>
  );
}

export default Resume;

///////////////////////////////////////
{
  /* <div className="contactLinks" >
         <a href=" file:///C:/Users/user/OneDrive/Desktop/PerScholas/Interview%20Prep%20-Resources%20Software%20Engineering/Resumes%20and%20cover%20letters/Portfolio%20Project/Resume.pdf">
        <div> Resume</div>
        </a>
       </div> */
}
