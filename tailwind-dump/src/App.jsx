import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const coverImage = "./field-clouds-sky-earth-46160.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={`h-screen bg-cover bg-no-repeat bg-[url(${coverImage})]`}>
      <div className="container mx-auto">
        <header className="flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between md:px-8 py-3 mb-4 border-b">
          <a
            href=""
            className="flex items-center mb-2 md:mb-0 text-decoration-line:none"
          >
            <img
              src={reactLogo}
              className=""
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            />
          </a>

          <ul className="flex">
            {["Home", "Features", "Pricing", "FAQs", "About"].map((i, k) => {
              return (
                <li key={k} className="">
                  <a href="#" className="px-2"></a>
                </li>
              );
            })}
          </ul>

          <div className="text-end">
            <button
              type="button"
              className="bg-blue-600 text-white p-1 mr-2 rounded"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white p-1 rounded"
            >
              Sign-up
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
