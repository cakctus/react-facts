import React, { useState, useContext } from "react"
import logo from "../images/logo.svg"
import Context from "./Context"

export default function Content() {
  const { state } = useContext(Context)

  const style = {
    backgroundColor: state ? "white" : "#24262e",
    color: state ? "black" : "white",
    transition: "all 1s",
  }
  return (
    <>
      <div style={style}>
        <nav>
          <h1 className="react-fact">Fun facts about React</h1>
        </nav>

        <main>
          <ul className="react-facts-li">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordon Walke</li>
            <li>Has well over 100K stars on GitHub</li>
          </ul>
          <img className="react-logo-content" src={logo} width="500" alt="" />
        </main>
      </div>
    </>
  )
}
