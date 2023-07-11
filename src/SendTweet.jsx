const SendTweet = ({ tweetPackage }) => {
  const quote = tweetPackage[0];
  const author = tweetPackage[1];
  const tweet = `https://twitter.com/intent/tweet?text=${quote}%0A%0A-${author}%0A%0ARandom Quote Machine with React by %40Home_At_Heart_%0A%0Ahttps://laurencollins.dev`;
  return (
    <div>
      <a href={tweet} id="tweet-quote" className="btn btn-warning">
        Tweet Quote
      </a>
    </div>
  );
};

export default SendTweet;
