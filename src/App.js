import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState()

  useEffect( () => {
    text()
  }, [])

  const text = async() => {
    const response = await fetch("http://localhost:8080/")
    setData(await response.text())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data}</h2>
      </header>
    </div>
  );
}

export default App;
