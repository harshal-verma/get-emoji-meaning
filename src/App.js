import React, { useState } from "react";
import "./App.css";
import {emojiDictionary} from "./emojiDB";

const emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(input) {
    const userInput = input.target.value;
    let emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "sorry! this emoji is not present in our database. ";
    }
    setMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    const userInput = emojiDictionary[emoji];
    setMeaning(userInput);
  }
  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: "column",
    }}
    className="App">
      <h1
        style={{
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        get-emoji-meaning
      </h1>
      <input
        onChange={onChangeHandler}
        type="text"
        style={{
          width: "45%",
          padding: "1.1rem 1rem",
          display: "block",
          margin: "0px auto",
          border: "solid black 1px",
          fontSize: "1.5rem",
        }}
      ></input>
      <div
        style={{
          border: "solid black 1px",
          width: "45%",
          backgroundColor: "#fff",
          margin: "16px auto",
          fontWeight: "700",
          fontSize: "1.5rem",
          height: "auto",
          padding: "1.1rem 1rem",
          textAlign: "center",
          textTransform: "lowercase",
        }}
      >
        {meaning}
      </div>
      <ul>
        {emojisWeKnow.map((emoji) => (
          <li
            onClick={() => emojiClickHandler(emoji)}
            style={{
              display: "inline",
              padding: "0rem",
              fontSize: "2rem",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            {emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
