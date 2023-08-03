// Import route & Routes, plus our components; this will allow us define which of our components should render depending on the URL, we'll also import our pages for our routes.
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Inconstruction from './pages/InConstruction';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './components/NavBar'; // Imported after creating a navigation using the link component (<link> </Link>) with the pathname and target property ( target="_blank")
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';


function App() {
  // We will now use the Route component (i.e. the route tag, <Routes></Routes>) to specify each route path within self closing tags ( < />)   
  return (
    <div className="App">
  {/* call the NavBar in to App.js  within a closing tag (< />), after importing it from components */}
      
        <NavBar /> 
      <h1> My Portfolio using Reactapp</h1>
        
      <Routes className='' >
       <Route path="/" element={<HomePage/>}/>
       <Route path="/Portfolio" element={<Portfolio/>}/>
       <Route path="/Resume" element={<Resume/>}/>
       <Route path="/InConstruction" element={<Inconstruction/>}/>
       <Route path="/Contact" element={<Contact/>}/>
      </Routes>

      <div>
        <span>Let us grow together. Connect Today. </span>
      </div>
      <Footer />

    </div>
  );
}

export default App;
