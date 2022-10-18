import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Styling from './components/styling/styling';
import Lists from './lists/list';
import PropDemo from './propDemo/propDemo';
import {Routes, Route} from 'react-router-dom'
import Styling2 from './components/styling copy/styling';
import Styling3 from './components/styling copy 2/styling';
import Home from './components/styling copy 3/styling';

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

      <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<Styling />} />
          <Route path="/product" element={<Styling2 />} />
          <Route path="/faqs" element={<Styling3 />} />
      </Routes>
     

     {/*  <Lists /> */}
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
