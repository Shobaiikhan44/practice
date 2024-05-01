import React
 from "react";
 import ReactDOM from 'react-dom'; 


function App() {
    let element = <h1>This is my first app </h1>;
    let element2 = <h2>This is my second tag </h2>;
   const person = {

name : "shobii " , 
email: "shobikhan338@gmail.com" , 
phone: "03098901609"   , 

   }
  
    return (
      <div>
        {element} 

        {element2} 
    
        person.name; 
      </div>
    );
  }
 