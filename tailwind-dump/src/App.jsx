import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const coverImage = "./field-clouds-sky-earth-46160.jpeg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div 
    className={`bg-[url(${coverImage})]`}
    style={{
      // backgroundImage:  `url("https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      // width: "100vw"
    }}>

    <div 
    className="container mx-auto">
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
          <li className="">
            <a href="#" className="px-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              About
            </a>
          </li>
        </ul>

        <div className="text-end">
          <button type="button" className="bg-blue-600 text-white p-1 mr-2 rounded">
            Login
          </button>
          <button type="button" className="bg-blue-600 text-white p-1 rounded">
            Sign-up
          </button>
        </div>
      </header>
    </div>
    </div>
  );
}

export default App;
