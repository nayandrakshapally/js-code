let count = 0; // Initialize the counter
let intervalId = null; // Variable to hold the interval ID

const counterDisplay = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Function to start the counter
const startCounter = () => {
  if (intervalId === null) {
    // Check if counter is already running
    intervalId = setInterval(() => {
      count++; // Increment count
      counterDisplay.textContent = count; // Update the display
    }, 1000); // Update every second
  }
};

// Function to stop the counter
const stopCounter = () => {
  clearInterval(intervalId); // Stop the interval
  intervalId = null; // Reset interval ID
};

// Event listeners for buttons
startBtn.addEventListener("click", startCounter);
stopBtn.addEventListener("click", stopCounter);

// React version -
import React, { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize the count state
  const intervalId = useRef(null); // Use ref to store the interval ID

  // Function to start the counter
  const startCounter = () => {
    if (intervalId.current === null) {
      // Check if the counter is already running
      intervalId.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Increment count
      }, 1000); // Update every second
    }
  };

  // Function to stop the counter
  const stopCounter = () => {
    clearInterval(intervalId.current); // Stop the interval
    intervalId.current = null; // Reset interval ID
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  );
};

export default Counter;
