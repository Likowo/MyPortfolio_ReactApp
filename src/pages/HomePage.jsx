import { useState,useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
// import "./App.css"

export default function HomePage () {
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

  //Step 4: Import API using axios .// https://random-data-api.com/api/v2/users?size=25&is_xml=true
  // Second API : https://api.quotable.io/random
  //Third API: https://type.fit/api/quotes

  const [quote, setQuote] = useState(null);

  const getRandomQuote = async () => {
     const response = await axios.get('https://type.fit/api/quotes');
     console.log(response)
    const randomQuote = await response.data;
    console.log({randomQuote})
    setQuote(response.data);
  }
  useEffect(() => {
    console.log('it is working')
    getRandomQuote();
  }, []);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

   return (
    <div className="homPage" > 
        <div className="aboutMe" > 
          <div className="title" >    <h1> About me </h1>  </div> <br/> 
          <p> Hi, my name is Ann Likowo Molinge. Welcome to my very first Portfolio built with reactapp. I am a full-stack software engineer student at Per Scholas bootcamp.  <br/> My portfolio provides links to a couple of my first projects, my resume, cover letter, projects still in construction and how to contact me. <br/> I believe everyday is a new day with new beginings and new learning opportunities.My projects continue to evole. Thus you will find something inspiring that meets your need. <br/> <b>Get a quote for the day with my random quote generator below. </b>   Let us grow toghter. Connect with me through my links below this page or on the contact page.  </p>
        </div>
       <div className="findQuote">
      <button onClick={getRandomQuote} className="quotesButton"> Show Quote Of The Day </button>
      <>
  {quote && quote.map((who, index) => {
    console.log(who.author.split(',')[0])
     if(index > 14){
      return(
        <div key={index}>
              Author Name:{who.author.split(',')[0]}
          <p> {quote[getRandomInt(0,quote.length)].text }</p>
        </div>);
     }

  })}
    </>
    </div>
  </div>  
   )
} 


 


{/* // Both NavBar and Footer done in separate pages by creating a navigation using the link component (<link> </Link>) with the pathname and target property ( target="_blank"); And then calling them in Apps.js to display on home browser. */}

