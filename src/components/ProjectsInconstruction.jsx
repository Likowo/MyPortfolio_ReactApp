// Upload/Create component boilerplate using rfce
 // Use github API to pull in projects in-construction

 import  { useState, useEffect } from 'react';
 import axios from 'axios';
 import React from 'react';

 function ProjectsInconstruction() {
   const [project, setProject] = useState([])

   useEffect(() => {
     getProjects()
   }, [])

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
   return (
     <div>
       <div>ProjectsInconstruction</div>
       <h1>Projects In Construction</h1>
       <ul>
         {project.map((project) => (
           <li key={project.id}>
             <a href={project.html_url}>{project.name}</a>
           </li>
         ))}
       </ul>
     </div>
   );
 }
 
 
 export default ProjectsInconstruction