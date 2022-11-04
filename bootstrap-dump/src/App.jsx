import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import icon from "../public/vite.svg";

function App() {
  const [count, setCount] = useState(false);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            src={icon}
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {["Home", "Features", "Pricing", "FAQs", "About"].map((i, k) => {
              return (
                <li key={k} className="">
                  <a href="#" className="nav-link px-2 link-secondary"></a>
                </li>
              );
            })}
         </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>  
    </div>
  );
}

export default App;
