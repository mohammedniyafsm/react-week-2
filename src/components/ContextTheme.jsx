import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'


function ContextTheme() {
    const { dark ,toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{background : dark ? "black" : "white",height : "600px" ,width: "600px"}}>
      <button onClick={toggleTheme}>Click Here</button>
    </div>
  )
}

export default ContextTheme
