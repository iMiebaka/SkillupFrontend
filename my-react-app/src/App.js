import { useState } from 'react';
import './App.css';

function App() {

console.log(useState(""));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [showTemplate, setShowtemplate] = useState(false)

  const changeState = (e) => {
    e.preventDefault()
    setName(name)
    setAge(age)
    setShowtemplate(true)
  }

  

  return (
    <div className="App">
      <h1 style={{marginTop: "17rem"}}>STATES & PROPS</h1>
      {showTemplate && <p>My name is {name}, and i am {age} years old.</p>}
    
      <form onSubmit={changeState}>
        <input value={name} onChange={e => setName(e.target .value)} type="text" placeholder='Enter name' /><br />
        <input value={age} onChange={e => setAge(e.target .value)} type="tel" placeholder='Enter age' /><br />
        <div className="boy" id="girl"></div>
      <button type="submit" onClick={changeState}>change state</button>
      </form>
      
    </div>
  );
}

export default App;