import { useContext, useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Counter } from "../context/Counter";
import axios from "axios";

function Home() {
  const { count, setCount } = useContext(Counter);

  const [images, setImages] = useState(["","", ""]);
  useEffect(() => {
    axios
      .get("https://api.pexels.com/v1/search?query=nature&per_page=10", {
        headers: {
          Authorization:
            "563492ad6f91700001000001e814b769ef974415b6c8b7ada74bf65b",
        },
      })
      .then((res) => {
        console.log(res.data.photos);
        setImages(res.data.photos);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nature</h1>
      <div className="card">
        {images?.map((i, k) => {
          return (
            <div key={k} className="card-images" style={{}}>
              <img src={i?.src?.portrait} alt="" loading="lazy" srcSet="" style={{width: "100%", height: "100%"}} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
