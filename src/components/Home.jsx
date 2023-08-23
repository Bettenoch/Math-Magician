import React from 'react';
import '../styles/Home.scss';

const Home = () => (
  <div className="home-container">
    <article>
      <h2>Welcome to our page!</h2>
    </article>
    <article className="home-intro">
      <p>
        Math Magician&apos;s sole focus is to provide fast, comprehensive, convenient,
        free online calculators in a plethora of areas.
        Currently, we have around 200 calculators to help you &quot; do the math&quot;
        quickly in areas
        such as finance,
        fitness, health, math, and others,
        and we are still developing more. Our goal is to become the one-stop,
        go-to site for people who need to make quick calculations.
      </p>
      <p>
        Additionally, we believe the internet should be a source of free information.
        Therefore, all of our tools and services are completely free, with no registration required.
        We coded and developed each calculator individually and
        put each one through strict, comprehensive testing.
        However, please inform us if you notice even the slightest error –
        your input is extremely valuable to us. While most calculators on
        Calculator.net are designed to be universally applicable for worldwide usage,
        some are for specific countries only.
        For example, the Income Tax Calculator is for United States residents only.
      </p>
    </article>
  </div>
);

export default Home;
