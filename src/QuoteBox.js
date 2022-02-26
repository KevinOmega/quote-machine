import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { useGlobalContext } from "./context";

function QuoteBox() {
  const { color, currentQuote, changeQuote } = useGlobalContext();
  return (
    <div id="quote-box">
      <div className="quote-center">
        <p style={{ color: `${color}` }} id="text">
          {currentQuote && `${currentQuote.quote}`}
        </p>
        <p style={{ color: `${color}` }} id="author">
          --{currentQuote && `${currentQuote.author}`}
        </p>

        <div className="btn-control">
          <div id="tweet-quote" style={{ background: `${color}` }}>
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${currentQuote.quote} \n author : ${currentQuote.author} \n`}
              target="_blank"
            >
              <AiFillTwitterSquare
                className="twitter-icon"
                style={{ color: `${color}` }}
              />
            </a>
          </div>
          <button
            onClick={changeQuote}
            style={{ background: `${color}` }}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
