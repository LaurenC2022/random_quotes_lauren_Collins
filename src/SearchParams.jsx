import { useState, useEffect } from "react";
import SendTweet from "./SendTweet";

const SearchParams = () => {
  // const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tweetPackage, settweetPackage] = useState([]);

  useEffect(() => {
    requestquoteDataObj();
  }, []);

  async function requestquoteDataObj() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data["content"]);
    setAuthor(data["author"]);
    settweetPackage([data["content"], data["author"]]);
    // settweetPackage([data["content"], data["author"]]);
  }

  return (
    <div className="padding">
      <div className="container padding">
        <p className="text-center" id="text">
          {quote}
        </p>
        <h2 className="text-center" id="author">
          -{author}
        </h2>
      </div>
      <div id="buttonsContainer" className="container">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-success"
              onClick={requestquoteDataObj}
              id="new-quote"
            >
              New Quote
            </button>
          </div>
          <div className="col">
            <SendTweet tweetPackage={tweetPackage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchParams;
