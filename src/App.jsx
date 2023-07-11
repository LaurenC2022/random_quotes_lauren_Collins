import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <a
            href="https://github.com/LaurenC2022/random_quotes_lauren_Collins.git"
            target="_blank"
            tabindex="1"
            accesskey="Q"
          >
            Link to Source Code
          </a>
          <br />
          <br />
          Inspirational quotes provided by <br />
          <a href="https://github.com/lukePeavey/quotable" target="_blank">
            Quotable API, by Luke Peavey on GitHub.
          </a>
          <br />
          <br />
          Background image provided by <br />
          <a
            href="https://frontendmasters.com/courses/complete-react-v8/"
            target="_blank"
          >
            FrontendMasters, Complete Intro to React course, v8
          </a>
          <br />
          <br />
          Random Quote Machine website built by
          <br />
          <a href="https://laurenCollins.dev" target="_blank">
            Lauren Collins at www.LaurenCollins.dev
          </a>
          <br />
          <br />
          Coding Challenge provided by <br />
          <a
            href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
            target="_blank"
          >
            Free Code Camp's Front End Development Libraries certification
            course.
          </a>
        </p>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
