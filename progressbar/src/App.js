import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import ProgressBar from "./progressBar";

const totalMs = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

export default function App() {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState(0);
  const timer = useRef();
  const cyclesCompleted = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevProgress) => prevProgress + progressMade);
      setPercent((prevPercent) => prevPercent + progressMade);
      cyclesCompleted.current += 1;
      if (cyclesCompleted.current === totalCycles) clearInterval(timer.current);
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <h2>Progress: {Math.trunc(percent)}%</h2>
      <ProgressBar progress={progress} />
    </div>
  );
}
