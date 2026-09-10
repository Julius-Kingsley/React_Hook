import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Akshay");
  const names = ["Kevin", "Shubham", "Harshit", "Mahesh"];
  let [color, setColor] = useState("white");
  let [text, setText] = useState("black");
  return (
    <>
      <div className="w-50 mx-auto border border-secondary rounded-4 d-flex flex-column">
        <h1 className="text-center text-warning bg-dark p-2">
          UseState Hook in Functional Component
        </h1>
        <h1 className="text-center">Counter: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("Count has Increased");
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
              console.log("Count has Decreased");
            }
          }}
        >
          Decrease
        </button>
      </div>

      <br></br>
      <h1 className="text-center text-success">Hello {name}</h1>
      <br></br>
      <button className="btn btn-primary" onClick={() => setName("Kiran")}>
        Change Name
      </button>
      <br></br>
      <div style={{ backgroundColor: color, color: text }}>
        <h1>Hello</h1>
        <button
          className="btn btn-secondary"
          onClick={() => [setColor("black"), setText("white")]}
        >
          Dark Mode
        </button>
        <br></br>
        <br></br>
        <button
          className="btn btn-secondary"
          onClick={() => [setColor("white"), setText("black")]}
        >
          Light Mode
        </button>
      </div>
    </>
  );
};

export default UseStateHook;
