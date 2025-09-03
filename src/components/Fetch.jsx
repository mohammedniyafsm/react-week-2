import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Person from "./Pages/Person";
import Navbar from "./Components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [light, setLight] = useState("red");
  const [time, setTime] = useState(5000);
  useEffect(() => {
    console.log(time, light);
    const timer = setInterval(() => {
      console.log("timer");
      if (time === 5000) {
        setLight("green");
        setTime(3000);
        console.log("gren");
      } else if (time === 3000) {
        setLight("yellow");
        setTime(2000);
        console.log("yellow");
      } else {
        setLight("red");
        setTime(5000);
        console.log("red");
      }
    }, time);
    return clearInterval(timer);
  }, [time]);

  return (
    <>
      <div
        className="red"
        style={{ backgroundColor: light === "red" ? "red" : "" }}
      ></div>
      <div
        className="green"
        style={{ backgroundColor: light === "green" ? "green" : "" }}
      ></div>
      <div
        className="yellow"
        style={{ backgroundColor: light === "yellow" ? "yellow" : "" }}
      ></div>
    </>
  );
}