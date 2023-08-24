import React, { useEffect, useState } from 'react';
import '../styles/Quotes.scss';

const Quotes = () => {
  const UniqueId = 'FQ9G9AMY8QX/B/b0zKMv7w==oP5aqUqH7SQufVDb';
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
        headers: {
          'X-Api-Key': UniqueId,
        },
      });
      const val = await res.json();
      setData(val);
    } catch (error) {
      setHasError('Something went wrong, please refresh the page');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (hasError) {
    return (
      <div className="error-popup">
        <p>{ hasError }</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <article className="loader-container">
        <div className="loader">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
          <div className="bar4" />
          <div className="bar5" />
          <div className="bar6" />
        </div>
      </article>
    );
  }
  const refreshQuote = () => {
    fetchQuote();
  };

  return (
    <article data-testid="quote-space" className="quote-container">
      {
            data.length > 0 ? (
              <article className="quote-display">
                <p className="showQuote" data-testid="test-quote">
                  {data[0]?.quote}
                </p>
                <span className="author">
                  {data[0]?.author}
                </span>
              </article>
            ) : (
              <article>
                <p className="showQuote">Please refresh to see some quotes.</p>
              </article>
            )
        }
      <button data-testid="test-refresh" className="quote-btn" type="button" onClick={refreshQuote}>  Refresh</button>
    </article>
  );
};

export default Quotes;
