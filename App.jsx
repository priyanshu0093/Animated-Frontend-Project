import React from "react" ;
import "./App.css" ;
import Ticket from "./Ticket.jsx";
import Lottery from "./Lottery.jsx";


function App(){

  let winCondition = (ticket) => {
    return ticket[0] === 0 ; // ticket ka first no equal to 0 so we won
  } ;


  return (
    <>
      <h1>Lottery Game!</h1>
      <Lottery n={3} winCondition={winCondition}/>

      {/* 
      <Ticket ticket={[0,1,2]}/>
      <Ticket ticket={[9,6,3,2,4,0]}/>
      <Ticket ticket={[0,44,21]}/> */}
    </>
  ) ;
}

export default App ;