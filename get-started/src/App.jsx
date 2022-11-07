import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios.get("https://backend-skillup.herokuapp.com/", {
      headers: {
        Authorization:
          "",
      },
    }).then(result => {
      console.log(result.data.data);
    })
  }, []);

  const isSubmitted = () => {
    const data = {
      email: username,
      password: password,
    };
    axios
      .post("https://backend-skillup.herokuapp.com/account/login", data)
      .then((result) => {
        console.log(result.data);
      });
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={isSubmitted}>Submit</button>

      {display ? (
        <>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </>
      ) : null}

      {/* {["I love javascript", "I love python"].map((value, index) => {
        return <p key={index}>{value}</p>;
      })} */}
    </div>
  );
}

const App2 = () => {
  useEffect(() => {
    console.log("UseEffect Child is effective");
    return () => {
      console.log("UseEffect Child is unmounted");
    };
  }, []);

  return <div>App2</div>;
};

export default App;
