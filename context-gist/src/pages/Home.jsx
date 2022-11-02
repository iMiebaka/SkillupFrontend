import { useContext, useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Counter } from "../context/Counter";
import axios from "axios";

function Home() {
  const { count, setCount } = useContext(Counter);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://api.pexels.com/v1/search?query=house&per_page=12&page=" + page,
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXEL_API_KEY,
          },
        }
      );
      {
        images.length == 0
          ? setImages(result.data.photos)
          : setImages([...images, ...result.data.photos]);
      }
      setPage(result.data.page + 1);
    } catch (error) {
      console.log(error);
    }
  };

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
      <h1>House</h1>
      <div className="card">
        {images?.map((i, k) => {
          return (
            <div key={k} className="card-images">
              <img
                loading="lazy"
                src={i?.src?.portrait}
                alt=""
                style={{ width: "100%", height: "100%" }}
                srcSet=""
              />
            </div>
          );
        })}
      </div>
      <button onClick={fetchData}>LOAD MORE</button>
    </div>
  );
}

export default Home;
