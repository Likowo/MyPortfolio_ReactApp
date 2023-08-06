// Upload/Create component boilerplate using rfce
import  { useState, useEffect } from 'react';
import axios from 'axios';
 import React from 'react';
//  import NaturePics from './NaturePics';
//  import './App.css';

//--** Wire Frame **--/
 // Use github API ('https://api.github.com/users/Likowo/repos') to pull in projects in-construction; Then map through using an anchor tag ( <a href={project.html_url}>{project.name}</a>)
//Import all paintings
// import  from AbstactPainting './'

 function InConstruction() {
   const [project, setProject] = useState([])

   const getProjects = async () => {
     try {
       const response = await axios.get(
         'https://api.github.com/users/Likowo/repos'
       )
       const firstTenProjects = response.data.slice(0, 10);
       setProject(firstTenProjects);
     } catch (error) {
       console.error('Error fetching projects:', error);
     }
   };

   useEffect(() => {
    getProjects()
  }, [])   

   return (
     <div className='inConstructionPage' >


<div className="naturePics">   
        <a href="\NaturePics">
          <button className="NaturePicsButton" > Click Me Click Me </button>
         </a>
</div>
      {/* Path: "C:\Users\user\Desktop\PerScholas\Software Engineering May 2023 Cohort\Inclass\Module 2\week10\portfolioreactapp\public\NaturePics" */}

      {/* <div className='naturePics' >
        <img src={require("./alexandra-nicolae-F5NMG3sRo4s-unsplash.jpg")} alt="Nature Pictures" />
         <button> CLICK ME </button>
      </div>  */}

      <p className='imageAttributes' >Image Attributes: Photo by <a href="https://unsplash.com/@nadine3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadine Marfurt</a> on <a href="https://unsplash.com/photos/5C_RPRgBNo0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

      Photo by <a href="https://unsplash.com/@chr_adams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Adams</a> on <a href="https://unsplash.com/photos/_gjUP8dinzE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

      Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/photos/mBQIfKlvowM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

      Photo by <a href="https://unsplash.com/@mauricesahl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maurice Sahl</a> on <a href="https://unsplash.com/photos/ugG-_T6_6WQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

      Photo by <a href="https://unsplash.com/@nadine3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadine Marfurt</a> on <a href="https://unsplash.com/photos/5C_RPRgBNo0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

      Photo by <a href="https://unsplash.com/@luckybeanz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark Harpur</a> on <a href="https://unsplash.com/photos/K2s_YE031CA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

      Photo by <a href="https://unsplash.com/@chrishenryphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Henry</a> on <a href="https://unsplash.com/photos/75mWBRUUvI4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

      Photo by <a href="https://unsplash.com/@aronvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aron Visuals</a> on <a href="https://unsplash.com/photos/6sMGdkj3Ywg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

      Photo by <a href="https://unsplash.com/@4estmoreland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Forrest Moreland</a> on <a href="https://unsplash.com/photos/vdSufXuwK-s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

      Photo by <a href="https://unsplash.com/@garrettpsystems?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">garrett parker</a> on <a href="https://unsplash.com/photos/DlkF4-dbCOU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@macnicolae?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandra Nicolae</a> on <a href="https://unsplash.com/photos/F5NMG3sRo4s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@jaimedantas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jaime Dantas</a> on <a href="https://unsplash.com/photos/PYS7Y4Gwrr0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      Photo by <a href="https://unsplash.com/@bjhguerin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Guerin</a> on <a href="https://unsplash.com/photos/NWrye3NRrKw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          <br />
      Photo by <a href="https://unsplash.com/@vr2ysl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sammy Wong</a> on <a href="https://unsplash.com/photos/QHH3WH1ZBsk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
   

    <h2>Projects In Construction, from my Github profile page</h2>

    <div className='listOfProjectsInConstruction' >
       <ul>
         {project.map((project) => (
           <li key={project.id}>
             <a href={project.html_url}>{project.name}</a>
           </li>
         ))}
       </ul>
      </div>
    </div>
       );
      
 }
 
 
export default InConstruction



