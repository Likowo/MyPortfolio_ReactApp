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

{/* <div className="naturePics">   
        <a href="\NaturePics">
          <button className="NaturePicsButton" > Click Me Click Me </button>
         </a>
</div> */}
 <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmd1c2kxaXRvM3BzbHRxcXFseGxxYjIweHJ1anRkMm0xMWR0NXRwayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o72FkiKGMGauydfyg/giphy.gif" alt="" className='comeingSoonImage'/>
 
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



