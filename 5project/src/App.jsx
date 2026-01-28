import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password]);

  // Auto-generate when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-800 text-orange-500 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl text-center text-white mb-4">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded-l-md outline-none"
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white px-4 rounded-r-md"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="flex items-center justify-between mb-3">
          <label className="text-white">Length: {length}</label>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="flex gap-4 text-white">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Symbols
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
