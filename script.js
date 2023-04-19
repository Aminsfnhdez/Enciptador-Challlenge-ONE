function convert() {
    let inputText = document.getElementById("input-text").value;
    let outputText = document.getElementById("output-text");
    let selectedOption = document.querySelector("input[name='encrypt-decrypt']:checked").value;
    
    if (selectedOption === "encrypt") {
      outputText.value = encryptString(inputText);
    } else if (selectedOption === "decrypt") {
      outputText.value = decryptString(inputText);
    }
  }
  
  function encryptString(inputText) {
    let encryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
      let currentChar = inputText[i];
      switch (currentChar) {
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "a":
          encryptedText += "ai";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += currentChar;
      }
    }
    return encryptedText;
  }
  
  function decryptString(inputText) {
    let decryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
      let currentChar = inputText[i];
      if (currentChar === "e" && inputText[i+1] === "n" && inputText[i+2] === "t" && inputText[i+3] === "e" && inputText[i+4] === "r") {
        decryptedText += "e";
        i += 4;
      } else if (currentChar === "i" && inputText[i+1] === "m" && inputText[i+2] === "e" && inputText[i+3] === "s") {
        decryptedText += "i";
        i += 3;
      } else if (currentChar === "a" && inputText[i+1] === "i") {
        decryptedText += "a";
        i += 1;
      } else if (currentChar === "o" && inputText[i+1] === "b" && inputText[i+2] === "e" && inputText[i+3] === "r") {
        decryptedText += "o";
        i += 3;
      } else if (currentChar === "u" && inputText[i+1] === "f" && inputText[i+2] === "a" && inputText[i+3] === "t") {
        decryptedText += "u";
        i += 3;
      } else {
        decryptedText += currentChar;
      }
    }
    return decryptedText;
  }
  
  function copy() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
  }