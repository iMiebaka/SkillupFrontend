import { useState } from "react";
import Body from "./Body";
import Nav from "./Nav";

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