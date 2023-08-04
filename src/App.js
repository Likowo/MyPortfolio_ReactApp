// Import route & Routes, plus our components; this will allow us define which of our components should render depending on the URL, we'll also import our pages for our routes.
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import InConstruction from './pages/InConstruction';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './components/NavBar'; // Imported after creating a navigation using the link component (<link> </Link>) with the pathname and target property ( target="_blank")
import Footer from './components/Footer';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';


function App() {
//   const [quote, setQuote] = useState(null);

//   const getImageQuote = async () => {
//     const response = await axios.get("https://zenquotes.io/api/quotes/author/random");
//    //  console.log(response)
//    const imageQuote = await response.json
//    console.log(imageQuote)
//    setQuote(response.json)
//  }

//  useEffect(() => {
//    console.log('it is working')
//    getImageQuote();
//  }, [])

  // We will now use the Route component (i.e. the route tag, <Routes></Routes>) to specify each route path within self closing tags ( < />)   
  return (
    <div className="App">
  {/* call the NavBar in to App.js  within a closing tag (< />), after importing it from components */}
      
        <NavBar /> 
      {/* <h1> My Portfolio using Reactapp</h1> */}
  
  <div className='appImages'> 
      <div> 
        <img src='https://web-saga.com/static/media/coder.09366fea.gif' alt='' className="img" />
      </div> 
      <div>
        <img src="https://thumbs.gfycat.com/CompleteSimplisticGrizzlybear-max-1mb.gif" alt="" className="img" />
     </div>
      <div>
        <img src="https://img-c.udemycdn.com/course/750x422/5178116_6858.jpg" alt="" className="img" />
     </div>
  
  </div>    
      <Routes className='' >
       <Route path="/" element={<HomePage/>}/>
       <Route path="/Portfolio" element={<Portfolio/>}/>
       <Route path="/Resume" element={<Resume/>}/>
       <Route path="/InConstruction" element={<InConstruction/>}/>
       <Route path="/Contact" element={<Contact/>}/>
      </Routes>
{/*      
      return (
        <div className="homePage" > 
          <h1>This is the Home page </h1>
          <button onClick={getImageQuote} className="quotesButton"> Show Quote Of The Day </button>
      <>
  {quote && quote.map((quote, index) => {
   return(
    <div key={index}>
      <h2> Author Name: {quote.authorname} </h2>
      <p> {quote.quotetext }</p>
    </div>)
  })}
     </>
        </div>        
    ); */}

      <Footer /> 
    

    </div>
  );
}

export default App;
