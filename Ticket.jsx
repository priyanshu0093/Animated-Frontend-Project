// step 2 hai lekin likhnge after TicketNum

import TicketNum from "./TicketNum";
import "./Ticket.css" ;

export default function Ticket({ticket}) { //ticket arr hai
    return (
        <div className="Ticket">
            <p>Ticket is here! </p>
            {ticket.map((num,idx) => (
                <TicketNum num={num} key={idx}/>
            ))} 
        </div>
    ) ;
} 