import { useState } from "react";
import "./App.css"

function Nav({region}) {

  const [showUp, setShowUp] = useState(false)
    return (
      <div>
        YouTube <sup style={{backgroundColor: showUp && "red"}}> {region} </sup>
      </div>
    );
  }
  
  export default Nav;