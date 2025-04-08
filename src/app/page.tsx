"use client";

import {useState, FormEvent } from "react";



export default function Home() {
    const [inputVal, setInputVal] = useState("");



const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(inputVal);
}

  return <div>
      <div >
          <h1>
              Enter Your Name
          </h1>
          <form onSubmit={handleSubmit}>
              <input type="text"
                     placeholder="Enter your Name..."
                     value={inputVal}
                     onChange={(e) => setInputVal(e.target.value)}
              />
              <button type="submit">Predict Data</button>
          </form>
      </div>
  </div>
}
