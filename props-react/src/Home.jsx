import { useState } from "react";
import Body from "./Body";
import Nav from "./Nav";

/*
Assignment
- Change the location using the setLocation function in the body prop
- Set the props to EN
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
