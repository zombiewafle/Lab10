import React, { useState } from "react";

import "./components/calc.scss";
import "./components/buttons.scss";

export function App() {
  const operations = ["/", "*", "-", "+", "."];

  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");

  const calcUpdate = (val) => {
    // setCalc(calc+val);
    if (
      (operations.includes(val) && calc == "") ||
      (operations.includes(val) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + val);

    if (!operations.includes(val)) {
      setRes(eval(calc + val).toString());
    }
  };

  const deleteFunction = () => {
    if (calc == "") {
      return;
    }

    const val = calc.slice(0, -1);
    setCalc(val);
  };

  const calculation = () => {
    const fixedValues = eval(calc).toFixed(9);
    const error = "ERROR";
    // setCalc(eval(fixedValues).toString());

    if (fixedValues < 0) {
      setRes(error);
    } else {
      setCalc(eval(fixedValues).toString());
    }
  };

  const clearFunction = () => {
    const clearVal = 0;
    setCalc(clearVal.toString());
  };

  return (
    <div className="calc">
      <div className="display">
        {res ? <span>({res})</span> : ""} {calc || "0"}
      </div>

      <div id="buttons">
        <div id="operators">
          <button type="button" onClick={() => calcUpdate("+")}>
            +
          </button>
          <button type="button" onClick={() => calcUpdate("-")}>
            -
          </button>
          <button type="button" onClick={() => calcUpdate("*")}>
            *
          </button>
          <button type="button" onClick={() => calcUpdate("/")}>
            /
          </button>
          <button type="button" onClick={deleteFunction}>
            C
          </button>
        </div>

        <div id="digits">
          <button type="button" onClick={() => calcUpdate("1")}>
            1
          </button>
          <button type="button" onClick={() => calcUpdate("2")}>
            2
          </button>
          <button type="button" onClick={() => calcUpdate("3")}>
            3
          </button>
          <button type="button" onClick={() => calcUpdate("4")}>
            4
          </button>
          <button type="button" onClick={() => calcUpdate("5")}>
            5
          </button>
          <button type="button" onClick={() => calcUpdate("6")}>
            6
          </button>
          <button type="button" onClick={() => calcUpdate("7")}>
            7
          </button>
          <button type="button" onClick={() => calcUpdate("8")}>
            8
          </button>
          <button type="button" onClick={() => calcUpdate("9")}>
            9
          </button>

          <button type="button" onClick={() => calcUpdate("0")}>
            0
          </button>
          <button type="button" onClick={() => calcUpdate(".")}>
            .
          </button>
          <button id="result" type="button" onClick={calculation}>
            =
          </button>

          <button id="clear" type="button" onClick={clearFunction}>
            AC
          </button>
        </div>
      </div>
    </div>
  );
}
