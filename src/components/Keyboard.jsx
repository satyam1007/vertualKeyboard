import React, { useState } from "react";

const Keyboard = () => {
  const [input, setInput] = useState("");
  const [caps, setCaps] = useState(false);
  const handleOnClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCaps = () => {
    setCaps((prev) => !prev);
  };

  const handleDeleteBtn = () => {
    let removeLastChar = input;
    setInput(removeLastChar.slice(0, -1));
  };

  const handleSpaceKey = () => {
    setInput((prev) => prev + " ");
  };

  const handleClearKey = () => {
    setInput("");
  };

  const keyRow1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keyRow2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keyRow3 = ["z", "x", "c", "v", "b", "n", "m"];

  const buttonClasses =
    "w-20 p-4 bg-blue-500 text-white rounded hover:bg-blue-700 text-xl";

  const specialButtonClasses = "w-20 p-4 bg-black text-white rounded text-xl";
  const delClear = "w-20 p-4 bg-red-500 text-white rounded text-xl";
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <input
        type="text"
        id="inputBox"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type here..."
        value={input}
        readOnly
      />

      <div className="flex justify-center items-center gap-1 flex-col">
        <div className="flex gap-1">
          <button className={specialButtonClasses}>tab</button>
          {keyRow1.map((key) => (
            <button
              className={buttonClasses}
              key={key}
              onClick={() => handleOnClick(caps ? key.toUpperCase() : key)}
            >
              {caps ? key.toUpperCase() : key}
            </button>
          ))}
          <button className={delClear} onClick={handleDeleteBtn}>
            delete
          </button>
        </div>
        <div className="flex gap-1">
          <button className={specialButtonClasses} onClick={handleCaps}>
            {caps ? (
              <span className={`text-green-400 duration-150`}>Caps</span>
            ) : (
              <span>Caps</span>
            )}
          </button>
          {keyRow2.map((key) => (
            <button
              className={buttonClasses}
              key={key}
              onClick={() => handleOnClick(caps ? key.toUpperCase() : key)}
            >
              {caps ? key.toUpperCase() : key}
            </button>
          ))}
          <button className={specialButtonClasses}>enter</button>
        </div>
        <div className="flex gap-1">
          <button className={specialButtonClasses}>shift</button>
          {keyRow3.map((key) => (
            <button
              className={buttonClasses}
              key={key}
              onClick={() => handleOnClick(caps ? key.toUpperCase() : key)}
            >
              {caps ? key.toUpperCase() : key}
            </button>
          ))}
          <button className={specialButtonClasses}>shift</button>
        </div>
        <div className="flex gap-1">
          <button
            className="px-60 bg-blue-500 hover:bg-blue-700 text-white rounded text-xl"
            onClick={handleSpaceKey}
          >
            space
          </button>
          <button className={delClear} onClick={handleClearKey}>
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
