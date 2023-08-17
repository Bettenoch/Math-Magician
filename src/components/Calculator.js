import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/Calculate';

const calLayout = {
  'row-first':['AC','+/-','%','÷'], 
  'row-second':['7','8','9','x'], 
  'row-third':['4','5','6','-'], 
  'row-fourth':['1','2','0','+'], 
  'row-fifth':['0','.','=']
}

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
        {generateCalLayout(calLayout, handleCalc)}
      </div>
    </>
  );
};

function generateButton(buttonName, onClickFunction) {
  return (
    <button type="button" name={buttonName} onClick={onClickFunction}>
      {buttonName}
    </button>
  );
}

function generateRow(rowName, buttons, onClickFunction) {
  if (rowName === 'row-fifth') {
    return (
      <article className={`math-row ${rowName}`}>
        <div>
          {generateButton(buttons[0], onClickFunction)}
        </div>
        <div>
          {buttons.slice(1).map((button) => generateButton(button, onClickFunction))}
        </div>
      </article>
    );
  }
  return (
    <article className={`math-row ${rowName}`}>
      {buttons.map((button) => generateButton(button, onClickFunction))}
    </article>
  );
}

function generateCalLayout(calLayout, onClickFunction) {
  return (
    <article className="math-functions">
      {Object.keys(calLayout).map((rowName) =>
        generateRow(rowName, calLayout[rowName], onClickFunction)
      )}
    </article>
  );
}

export default Calculator;
