import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const urlQuote = "https://quoteslate.vercel.app/api/quotes/random";
    try {
      const response = await fetch(urlQuote);
      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="Wrapper">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>

      {/*<!-- Container pour les boutons -->*/}
      <div className="buttons-container">
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i> Tweet
        </a>
        <button id="new-quote" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
