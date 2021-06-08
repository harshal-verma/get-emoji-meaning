import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😃": "Grinning Face with Big Eyes",
  "😀": "Grinning Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "🤒": "Face with Thermometer",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😮": "Face with Open Mouth",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "💀": "Skull",
  "☠️": "Skull and Crossbones",
  "💩": "Pile of Poo",
  "🤡": "Clown Face",
  "👻": "Ghost",
  "👽": "Alien",
  "👾": "Alien Monster",
  "🤖": "Robot",
  "😺": "Grinning Cat",
  "😸": "Grinning Cat with Smiling Eyes",
  "😹": "Cat with Tears of Joy",
  "😻": "Smiling Cat with Heart-Eyes",
  "😼": "Cat with Wry Smile",
  "😽": "Kissing Cat",
  "🙀": "Weary Cat",
  "😿": "Crying Cat",
  "😾": "Pouting Cat",
  "💋": "Kiss Mark",
  "👶": "Baby",
  "🧒": "Child",
  "👦": "Boy",
  "👧": "Girl",
  "🧑": "Person",
  "👱": "Person: Blond Hair",
  "👨": "Man",
  "🧔": "Person: Beard",
  "👩": "Woman",
};

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
          padding: "1.25rem 1rem",
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
          padding: "1.25rem 1rem",
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
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "#393c44",
          padding: "0.75rem 0rem",

        }}
      >
        &lt;/&gt; <span
        style={{
          color: "#F59E0B",
        }}
        >by Harshal</span>
      </footer>
    </div>
  );
}

export default App;
