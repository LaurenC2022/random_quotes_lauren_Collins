import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import "./style.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>Random Quote Machine</h1>
      </header>
      <div id="quote-box">
        <SearchParams />
      </div>
      <footer>
        <p>
          Inspirational quotes provided by{" "}
          <a href="https://github.com/lukePeavey/quotable" target="_blank">
            Quotable API, by Luke Peavey on GitHub (click here)
          </a>
          <br />
          <br />
          Random Quote Machine Website Built by Lauren Collins
          <br />
          Website Link to Portfolio:
          <br />
          <a href="https://laurenCollins.dev">www.LaurenCollins.dev</a>
        </p>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
