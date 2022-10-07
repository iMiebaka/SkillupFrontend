import React from "react";

function Body({ letter, greet, setGreet, setLocation }) {
  // setTimeout(() => setGreet("Back to the child"),
  // 4000)

  function changeLoc (){
    setLocation("EN")
  }

  return (
    <div>
      <p>{letter}</p>
      <p>{greet[2].low}</p>
      <button onClick={changeLoc}>Change location</button>
    </div>
  );
}

export default Body;
