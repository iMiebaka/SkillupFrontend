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
  return (
    <div>
      <Nav location___={location} />
      <Body />
    </div>
  );
}

export default Home;
