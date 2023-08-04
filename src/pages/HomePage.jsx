import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
// import "./App.css"

export default function Home (props){
   //Step 1: Create function ( hint: async /await) to get data from random quotes API using axios
   //Basic API Setup :
  //  const getInfo = async () => {
  //   const response = await axios.get('')
  //   const info = response.data
  //   console.log(info)
  //   setQuote(response.data)
  // }
  // useEffect(()=>{
  //   getInfo()
  // },[]

  //******OR */

  //   const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/', {mode:'cors'});
  //     const data = await response.json();
  //     console.log({ data })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   makeAPICall();
  // }, [])

  //Step 2: Declare useState to hold the array of quotes

  // Step 3: P tag about me

  //Step 4: Import API using axios .// Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>

  // <div>
  //   <img src="https://thumbs.gfycat.com/CompleteSimplisticGrizzlybear-max-1mb.gif" alt="" className="image" />
  // </div>

  const [quote, setQuote] = useState(null);

  const getImageQuote = async () => {
     const response = await axios.get('https://random-data-api.com/api/v2/users?size=25&is_xml=true');
     console.log(response)
    const imageQuote = await response.data;
    console.log({imageQuote})
    setQuote(response.data)
  }
  

  useEffect(() => {
    console.log('it is working')
    getImageQuote();
  }, [])

    return (
        <div className="homePage" > 
          <h1>This is the Home page </h1>
          <button onClick={getImageQuote} className="quotesButton"> Show Quote Of The Day </button>
      <>
  {quote && quote.map((quote, index) => {
   return(
    <div key={index}>
      <h2> Author Name: {quote.username} </h2>
      <p> {quote.avatar}</p>
      <p> {quote.avatar}</p>
      <p> {quote.employment.title}</p>
    </div>)
  })}
     </>
        </div>        
    );
};



// Both NavBar and Footer done by creating a navigation using the link component (<link> </Link>) with the pathname and target property ( target="_blank"); And then calling then in Apps.js to display on home browser.

//--> NavBar parent div---//
  // logo img in div tag //
  // 5 buttons in 5 divs for home page,portfolio,resume,inconstruction and contact//
// {/* <div className="navBar">
//     <div className="logoIcon">
//      <img src=" logo icon here" alt="" className="icon" />
//    </div> */}

// ---> Footer parent div---//
  // logo img in rightside div tag //
  // Let us grow together leftside div//
        // 3 clickable spans for linkedIn (https://www.linkedin.com/in/ann-likowo-molinge-39576473/),Calendy ('
          https://calendly.com/amolinge17') and github (https://github.com/Likowo?tab=repositories)//

{/* <div className="footer">
      <div className="logoIcon">
        <img src=" logo icon here" alt="" className="icon" />
      </div>
</div> */}
      
    