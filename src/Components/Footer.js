import React, { useContext } from "react"
import Context from "./Context"

export default function Footer() {
  const { state } = useContext(Context)

  const style = {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    position: "fixed",
    bottom: "0",
    textAlign: "center",
    transition: "all 1s",
    boxShadow: "10px 10px 10px 10px black",
  }

  return (
    <div style={style}>
      <footer className={state ? style : "footer"}>
        <div className="footer-content">&copy; Cakctus</div>
      </footer>
    </div>
  )
}
