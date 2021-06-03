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
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍️": "Writing Hand",
  "💅": "Nail Polish",
  "🤳": "Selfie",
  "💪": "Flexed Biceps",
  "🦾": "Mechanical Arm",
  "🦿": "Mechanical Leg",
  "🦵": "Leg",
  "🦶": "Foot",
  "👂": "Ear",
  "🦻": "Ear with Hearing Aid",
  "👃": "Nose",
  "🧠": "Brain",
  "🦷": "Tooth",
  "🦴": "Bone",
  "👀": "Eyes",
  "👁️": "Eye",
  "👅": "Tongue",
  "👄": "Mouth",
  "👶": "Baby",
  "🧒": "Child",
  "👦": "Boy",
  "👧": "Girl",
  "🧑": "Person",
  "👱": "Person: Blond Hair",
  "👨": "Man",
  "🧔": "Person: Beard",
  "👨‍🦰": "Man: Red Hair",
  "👨‍🦱": "Man: Curly Hair",
  "👨‍🦳": "Man: White Hair",
  "👨‍🦲": "Man: Bald",
  "👩": "Woman",
  "👩‍🦰": "Woman: Red Hair",
  "👩‍🦱": "Woman: Curly Hair",
  "👩‍🦳": "Woman: White Hair",
  "👩‍🦲": "Woman: Bald",
  "👱‍♀️": "Woman: Blond Hair",
  "👱‍♂️": "Man: Blond Hair",
  "🧓": "Older Person",
"👴": "Old Man",
"👵": "Old Woman",
"🙍": "Person Frowning",
"🙍‍♂️": "Man Frowning",
"🙍‍♀️": "Woman Frowning",
"🙎‍♂️": "Man Pouting",
"🙎‍♀️": "Woman Pouting",
"🙅‍♂️": "Man Gesturing No",
"🙅‍♀️": "Woman Gesturing No",
"🧍": "Person Standing",
"🧍‍♂️": "Man Standing",
"🧍‍♀️": "Woman Standing",
"🧎": "Person Kneeling",
"🧎‍♂️": "Man Kneeling",
"🧎‍♀️": "Woman Kneeling",
"👨‍🦯": "Man with White Cane",
"👩‍🦯": "Woman with White Cane",
"👨‍🦼": "Man in Motorized Wheelchair",
"👩‍🦼": "Woman in Motorized Wheelchair",
"👨‍🦽": "Man in Manual Wheelchair",
"👩‍🦽": "Woman in Manual Wheelchair",
"🏃": "Person Running",
"🏃‍♂️": "Man Running",
"🏃‍♀️": "Woman Running",
"💃": "Woman Dancing",
"🕺": "Man Dancing",
};

const emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(input) {
    const userInput = input.target.value;
    let emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "sorry! this emoji is not present in out database";
    }
    setMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    const userInput = emojiDictionary[emoji];
    setMeaning(userInput);
  }
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        get emoji meaning
      </h1>
      <input
        onChange={onChangeHandler}
        type="text"
        style={{
          width: "400px",
          padding: "1rem",
          display: "block",
          margin: "0px auto",
          border: "solid black 1px",
        }}
      ></input>
      <div
        style={{
          border: "solid black 1px",
          width: "400px",
          height: "50px",
          margin: "16px auto",
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
              padding: "1rem 0.5rem",
              fontSize: "1.5rem",
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
