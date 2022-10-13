import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Lists from './lists/list';
import PropDemo from './propDemo/propDemo';

function App() {
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
      <Navbar />
      <Lists />
      {/* <div className="app" style={{ border: "1px solid lightgray", padding: "1rem"}}>
      <h1 style={{marginTop: "17rem"}}>STATES & PROPS</h1>
      {showTemplate && <p>My name is {name}, and i am {age} years old.</p>}
    
      <form onSubmit={changeState}>
        <input value={name} onChange={e => setName(e.target .value)} type="text" placeholder='Enter name' /><br />
        <input value={age} onChange={e => setAge(e.target .value)} type="tel" placeholder='Enter age' /><br />
        <div className="boy" id="girl"></div>
      <button type="submit" onClick={changeState}>change state</button>
      </form>
      </div>
      
      
      <PropDemo name={name} age={age} showTemplate={showTemplate} setShowTemplate={setShowtemplate} /> */}
    </div>
  );
}

export default App;
