function engToPongChar(char) {
  switch (char.toLowerCase()) {
    case 'a': return "pong";
    case 'b': return "p ong";
    case 'c': return "po ng";
    case 'd': return "pon g";
    case 'e': return "p o ng";
    case 'f': return "po n g";
    case 'g': return "p on g";
    case 'h': return "p o n g";
    case 'i': return "Pong";
    case 'j': return "Po ng";
    case 'k': return "P ong";
    case 'l': return "Pon g";
    case 'm': return "P o ng";
    case 'n': return "Po n g";
    case 'o': return "P on g";
    case 'p': return "P o n g";
    case 'q': return "pOng";
    case 'r': return "p Ong";
    case 's': return "pO ng";
    case 't': return "pOn g";
    case 'u': return "p O ng";
    case 'v': return "pO n g";
    case 'w': return "p On g";
    case 'x': return "p O n g";
    case 'y': return "poNg";
    case 'z': return "p oNg";
    default: return char;
  }
}

function pongToEngChar(pong) {
  const map = {
    "pong": "a",
    "p ong": "b",
    "po ng": "c",
    "pon g": "d",
    "p o ng": "e",
    "po n g": "f",
    "p on g": "g",
    "p o n g": "h",
    "Pong": "i",
    "Po ng": "j",
    "P ong": "k",
    "Pon g": "l",
    "P o ng": "m",
    "Po n g": "n",
    "P on g": "o",
    "P o n g": "p",
    "pOng": "q",
    "p Ong": "r",
    "pO ng": "s",
    "pOn g": "t",
    "p O ng": "u",
    "pO n g": "v",
    "p On g": "w",
    "p O n g": "x",
    "poNg": "y",
    "p oNg": "z",

    // Uppercase
    "ponG": "A",
    "p onG": "B",
    "po nG": "C",
    "pon G": "D",
    "p o nG": "E",
    "po n G": "F",
    "p on G": "G",
    "p o n G": "H",
    "PonG": "I",
    "Po nG": "J",
    "P onG": "K",
    "Pon G": "L",
    "P o nG": "M",
    "Po n G": "N",
    "P on G": "O",
    "P o n G": "P",
    "pOnG": "Q",
    "p OnG": "R",
    "pO nG": "S",
    "pOn G": "T",
    "p O nG": "U",
    "pO n G": "V",
    "p On G": "W",
    "p O n G": "X",
    "poNgG": "Y",
    "p oNgG": "Z",
  };

  return map[pong] ?? pong;
}

function translateEngToPong(input) {
  let translation = "(";
  for (let char of input) {
    if (char === " ") {
      translation = translation.trimEnd();
      translation += ")(";
    } else {
      let pong = engToPongChar(char);
      if (char >= 'A' && char <= 'Z' && pong !== char) {
        pong = pong.slice(0, -1) + "G"; // Capitalize g
      }
      translation += pong + " ";
    }
  }
  return translation.trimEnd() + ")";
}

function translatePongToEng(input) {
  let translation = "";
  let currentPong = "";
  const valid = ["p", "o", "n", " ", "P", "O", "N", "G", "g"];

  for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    if (currentPong === "" && ch === " ") continue;

    if (valid.includes(ch)) {
      currentPong += ch;
    } else if (ch === ")") {
      if (currentPong.trim() !== "") {
        translation += pongToEngChar(currentPong.trim());
        currentPong = "";
      }
      translation += " ";
    } else if (ch !== "(") {
      translation += ch;
    }
  }

  if (currentPong.trim() !== "") {
    translation += pongToEngChar(currentPong.trim());
  }

  return translation.trim();
}

document.addEventListener("DOMContentLoaded", () => {
  const engBox = document.getElementById("eng");
  const pongBox = document.getElementById("pong");

  if (engBox && pongBox) {
    engBox.addEventListener("input", () => {
      pongBox.value = translateEngToPong(engBox.value);
    });

    pongBox.addEventListener("input", () => {
      engBox.value = translatePongToEng(pongBox.value);
    });
  }
});

