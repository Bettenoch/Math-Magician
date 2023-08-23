import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [inputData, setInputData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleCalc = (e) => {
    const btn = e.target.name;
    return setInputData((obj) => calculate(obj, btn));
  };
  const { total, next, operation } = inputData;
  const result = `${total}${operation}${next}`.replace(/null/g, '').replace(/undefined/g, '');

  return (
    <>
      <div className="main-container">
        <div>
          <h3>Let&apos;s do some math!!</h3>
          <div className="magician" />
        </div>
        <div className="container">
          <article className="display-content">
            <input
              type="text"
              className="input-text"
              id="calc-screen"
              value={result === '' ? '0' : result}
              disabled
            />
          </article>
          <article className="math-functions">
            <article className="math-row row-first">
              <button type="button" name="AC" onClick={handleCalc}>AC</button>
              <button type="button" name="+/-" onClick={handleCalc}>+/-</button>
              <button type="button" name="%" onClick={handleCalc}>%</button>
              <button type="button" name="÷" onClick={handleCalc}>÷</button>
            </article>

            <article className="math-row row-second">
              <button type="button" name="7" onClick={handleCalc}>7</button>
              <button type="button" name="8" onClick={handleCalc}>8</button>
              <button type="button" name="9" onClick={handleCalc}>9</button>
              <button type="button" name="x" onClick={handleCalc}>x</button>
            </article>

            <article className="math-row row-third">
              <button type="button" name="4" onClick={handleCalc}>4</button>
              <button type="button" name="5" onClick={handleCalc}>5</button>
              <button type="button" name="6" onClick={handleCalc}>6</button>
              <button type="button" name="-" onClick={handleCalc}>-</button>
            </article>

            <article className="math-row row-fourth">
              <button type="button" name="1" onClick={handleCalc}>1</button>
              <button type="button" name="2" onClick={handleCalc}>2</button>
              <button type="button" name="3" onClick={handleCalc}>3</button>
              <button type="button" name="+" onClick={handleCalc}>+</button>
            </article>

            <article className="math-row row-fifth">
              <div>
                <button type="button" name="0" onClick={handleCalc}>0</button>
              </div>
              <div>
                <button type="button" name="." onClick={handleCalc}>.</button>
                <button type="button" name="=" onClick={handleCalc}>=</button>
              </div>
            </article>
          </article>
        </div>
      </div>
    </>
  );
};

export default Calculator;
