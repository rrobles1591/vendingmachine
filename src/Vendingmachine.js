import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const VendingMachine = () => {
    return(
        <div>
            <h1>Buy a snack!</h1>
            <nav>
                <NavLink exact to="/chips">Chips</NavLink>
                <NavLink exact to="/chocolate">Chocolate</NavLink>
                <NavLink exact to="/coke">Coke</NavLink>
            </nav>
            <img 
            src="https://media4.giphy.com/media/bDS3ycLNK08UhgAiI3/giphy.gif?cid=ecf05e473zcw8w7axf2fsh72rnuowcvna3teltk8yoyu1hda&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            width={500}
            />
        </div>
    )
}

export default VendingMachine;