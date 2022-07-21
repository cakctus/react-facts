import React, { useState, useContext } from "react"
import logo from "../logo.svg"
import Context from "./Context"

export default function Header() {
  const { state, setState } = useContext(Context)

  const changeTheme = () => {
    setState(!state)
  }

  const style = {
    backgroundColor: state ? "white" : "#24262e",
    color: state ? "black" : "white",
    boxShadow: state
      ? "0px 10px 15px -15px #111"
      : "-5px 10px 15px -20px white",
    transition: "all 1s",
  }

  return (
    <header style={style}>
      <nav style={style}>
        <div className="sub-nav">
          <div>
            <img className="react-logo" src={logo} width="70" alt="" />
            <span className="react-facts">ReactFacts</span>
          </div>

          <div className="change">
            <input
              onClick={changeTheme}
              type="checkbox"
              id="type2"
              class="toggle_checkbox"
            />
            <label for="type2" class="toggle_label type2">
              <span class="toggle_span type2"></span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  )
}
