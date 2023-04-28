import { useState } from "react";

function TextHolder(text) {
return  <TextHolderTwo text={text}/>;
}

function TextHolderTwo(text) {
  return  <p>{text}</p>;
  }


  function ButtonHolder(setText) {
  return  <button onClick={() => setText("Mate")}>click</button>;
}

function Main() {
  const [text, setText] = useState("Check");

  return (
    <>
      <TextHolder text={text} />
      <ButtonHolder setText={setText} />
    </>
  );
}

function PropsTwo() {
  return (
    <Main />
  );
}

export default PropsTwo;
