import { useState } from "react";
import Body from "./Body";
import Nav from "./Nav";

/*
Assignment
- Change the location using the setLocation function in the Body component
- Change the state using the setLocation function  to EN
- Do that using a button
*/

function Home() {
  const [location, setLocation] = useState("NG");
  const data = "This body should change the nav component";
  const [greeting, setGreeting] = useState([
    "Hello",
    "How are you",
    { low: "lower" },
  ]);

  setTimeout(() => console.log(greeting), 2000);
  // setInterval(() => setGreeting(),
  // 4000)
  return (
    <div>
      <Nav region={location} asset={211} />
      <Body
        letter={data}
        greet={greeting}
        setGreet={setGreeting}
        setLocation={setLocation}
      />
    </div>
  );
}

export default Home;
