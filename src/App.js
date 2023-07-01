import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState (`light`);

  const [alert, setALert] = useState(null)
  
  const showAlert = (message, type) => {
    setALert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setALert(null);
    },1500)  
  }

  const toggleMode = () =>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white' 
      showAlert("Light Mode has been Enabled","success");
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" home="HOME" about="About Us"/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>

          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}/>}/>

    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
