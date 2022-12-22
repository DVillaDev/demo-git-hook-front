import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState()
  const [bye, setBye] = useState()

  useEffect(() => {
    text()
  }, [])

  const text = async () => {
    const response = await fetch("http://localhost:8080/")
    setData(await response.text())
    const bye = await fetch("http://localhost:8080/bye")
    setBye(await bye.text())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data}</h2>
        <h1>demo</h1>
        <h2>{bye}</h2>
      </header>
    </div>
  );
}

export default App;
