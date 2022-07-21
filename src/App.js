import React, { useState, useContext } from "react"
import "./App.css"

import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

import Context from "./Components/Context"

function App() {
  const [state, setState] = useState(false)

  const body = document.getElementsByTagName("body")[0]

  if (state) {
    body.style.background = "white"
    body.style.transition = "all 1s"
  } else {
    body.style.background = "#24262e"
    body.style.transition = "all 1s"
  }

  return (
    <div>
      <Context.Provider value={{ state, setState }}>
        <Header />
        <div className="App">
          <Content />
        </div>
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default App
