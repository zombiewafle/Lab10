import React, { useState } from "react";

import { Buttons } from "./components/buttons";
import { Display } from "./components/display";

import "./components/calc.scss"
import "./components/buttons.scss"

export function App() {
    const operations = ["/","*", "-", "+", "."];

    const [calc, setCalc] = useState("");
    const [res, setRes] = useState("");


    const calcUpdate = (val) =>{
        const digits = [];
        setCalc(calc + value); 
    }

    return(
        <>

            <div className="calc">
                
                <Display></Display>
                
                <Buttons id="buttons"></Buttons>
                
            </div>

        </>
    )

}
