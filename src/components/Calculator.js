import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/Calculate';
import generateBTLayout from './ButtonLayout.js';

const calLayout = {
  'row-first':['AC', '+/-', '%', '÷'], 
  'row-second':['7', '8',  '9',  'x'], 
  'row-third':['4', '5', '6', '-'], 
  'row-fourth':['1', '2', '0', '+'], 
  'row-fifth':['0', '.', '=']
};

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
        {generateBTLayout(calLayout, handleCalc)}
      </div>
    </>
  );
};

export default Calculator;
