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

  //Step 4: Import API using axios .// https://random-data-api.com/api/v2/users?size=25&is_xml=true

  const [quote, setQuote] = useState(null);

  const getImageQuote = async () => {
     const response = await axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true');
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
          <button onClick={getImageQuote} className="quotesButton"> Show Employee Information </button>
      <>
  {quote && quote.map((quote, index) => {
   return(
    <div key={index}>
      <h2> Employee Name: {quote.username} </h2>
      <img src={quote.avatar} />
      <p> Gender: {quote.gender}</p>
      <p> Title: {quote.employment.title}</p>
      <p> Main Skill: {quote.employment.key_skill}</p>
      <p> State: {quote.address.state}</p>
      <p> Country: {quote.address.country}</p>
    </div>)
  })}
     </>
        </div>        
    );
};



// Both NavBar and Footer done in separate pages by creating a navigation using the link component (<link> </Link>) with the pathname and target property ( target="_blank"); And then calling them in Apps.js to display on home browser.

      
    