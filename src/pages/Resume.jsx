import React from "react";
// import "./App.css";

// Use this quick and simple way using anchor tag, to link to local pdf file (e.g Resume,cover letter) in a create-react-app project.

<a href="\pdfname.pdf" download>
  Download Resume
</a>;

function Resume() {
  return (
    <div className="resumePage">
      <div className="downLoadResume">
        <a href="\Resume  Portfolio.pdf" download>
          <button> Download Resume </button>
        </a>
      </div>
      <div className="downLoadCoverLetter">
        <a href="\Cover letter Portfolio.pdf" download>
          <button> Download Cover Letter </button>
        </a>
      </div>
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
