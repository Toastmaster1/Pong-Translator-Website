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
  switch (pong) {
    case "pong": return "a";
    case "p ong": return "b";
    case "po ng": return "c";
    case "pon g": return "d";
    case "p o ng": return "e";
    case "po n g": return "f";
    case "p on g": return "g";
    case "p o n g": return "h";
    case "Pong": return "i";
    case "Po ng": return "j";
    case "P ong": return "k";
    case "Pon g": return "l";
    case "P o ng": return "m";
    case "Po n g": return "n";
    case "P on g": return "o";
    case "P o n g": return "p";
    case "pOng": return "q";
    case "p Ong": return "r";
    case "pO ng": return "s";
    case "pOn g": return "t";
    case "p O ng": return "u";
    case "pO n g": return "v";
    case "p On g": return "w";
    case "p O n g": return "x";
    case "poNg": return "y";
    case "p oNg": return "z";
    default: return pong;
  }
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
        pong = pong.slice(0, -1) + pong.slice(-1).toUpperCase();
      }
      translation += pong + " ";
    }
  }
  return translation.trimEnd() + ")";
}

function translatePongToEng(input) {
  let translation = "";
  let currentPong = "";
  const valid = ["p", "o", "n", " ", "P", "O", "N"];

  for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    if (currentPong === "" && ch === " ") continue;

    if (valid.includes(ch)) {
      currentPong += ch;
    } else if (ch === "g") {
      currentPong += "g";
      translation += pongToEngChar(currentPong);
      currentPong = "";
    } else if (ch === "G") {
      currentPong += "g";
      translation += pongToEngChar(currentPong).toUpperCase();
      currentPong = "";
    } else if (ch === ")") {
      translation += " ";
    } else if (ch !== "(") {
      translation += ch;
    }
  }
  return translation;
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
