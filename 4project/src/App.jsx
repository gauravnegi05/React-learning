// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [Counter, setCounter] = useState(10)

//   const addValue = () =>{
//     setCounter(prev => prev +1)
//     setCounter(prev => prev +1)
//     setCounter(prev => prev +1)
//     setCounter(prev => prev +1)
//   }
//   return (
//     <>
//       <h1>Counter --- {Counter}</h1>
//       <button
//       onClick={addValue}
//       >add</button>
//     </>
//   )
// }

// export default App

import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500"
          >
            purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500"
          >
            yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-500"
          >
            pink
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500"
          >
            blue
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

