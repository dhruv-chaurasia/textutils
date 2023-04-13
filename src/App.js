import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [switchTxt, setSwitchTxt] = useState('Dark Mode')
  const [alert, setAlert] = useState(null)
  const showAlert = (mssg, type) => {
    setAlert({
      mssg: mssg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  // let col = 'blue'
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setSwitchTxt('Light Mode')
      document.body.style.backgroundColor = '#070A52'
      showAlert("Dark Mode Enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      setSwitchTxt('Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }
  const remove = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleColor = (col) => {
    // document.body.style.backgroundColor = col;
    remove()
    document.body.classList.add('bg-'+col)
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} switchTxt={switchTxt} />
      <Navbar/>
       <Alert alert={alert} />
      <div className="container my-4">
        <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} />
        <About/>
      </div>   */}
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Text" showAlert={showAlert} mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} switchTxt={switchTxt} />
      <Alert alert={alert} />
      <div className="container">
      {/* <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} /> */}
      <Routes>
        <Route path = "/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
        <Route path = "/about" element={ <About mode={mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
