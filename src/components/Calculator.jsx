import React from 'react';
import '../styles/Calculator.css';
import Display from './Display';

const Calculator = () => (
  <div className="container">
    <Display className="display-content" />
    <article className="math-functions">
      <article className="math-row row-first">
        <button type="submit">AC</button>
        <button type="submit">+/-</button>
        <button type="submit">%</button>
        <button type="submit">÷</button>
      </article>

      <article className="math-row row-second">
        <button type="submit">7</button>
        <button type="submit">8</button>
        <button type="submit">9</button>
        <button type="submit">×</button>
      </article>

      <article className="math-row row-third">
        <button type="submit">4</button>
        <button type="submit">5</button>
        <button type="submit">6</button>
        <button type="submit">-</button>
      </article>

      <article className="math-row row-fourth">
        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
        <button type="submit">+</button>
      </article>

      <article className="math-row row-fifth">
        <div>
          <button type="submit">0</button>
        </div>
        <div>
          <button type="submit">.</button>
          <button type="submit">=</button>
        </div>
      </article>
    </article>
  </div>
);

export default Calculator;
