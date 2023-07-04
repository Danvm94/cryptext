// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
  // Save the page's form in a variable called form
  var form = document.getElementById("encryption-form");
  // Change the default behavior of the page's form
  form.addEventListener("submit", function (event) {
    // Prevent the form to be submited
    event.preventDefault();
  });

  // Save the encryptionDecryptionContainer <div> to the variable encryptionDecryptionContainer
  let encryptionDecryptionContainer = document.getElementById(
    "encryptionDecryptionContainer"
  );
  // Change the first part Encryption / Decryption to visible
  opacityChange("show", encryptionDecryptionContainer);

  // Collect all the buttons from the page
  let buttons = document.getElementsByClassName("encrypt-box__option");
  for (let button of buttons) {
    // Add event listener type click for each option in buttons
    button.addEventListener("click", function () {
      // If click on encrypt or decrypt
      if (this.id === "encrypt" || this.id === "decrypt") {
        // Display the second div called encryptionTypeContainer
        opacityChange(
          "show",
          document.getElementById("encryptionTypeContainer")
        );
        // Hide the first info text
        opacityChange("hide", document.getElementById("info-one"));
      }
    });
  }
});
/**
 * This function is designed for the Caesar Cipher method.
 * It receives an input parameter called 'encryption' which should be set to either 'encrypt' or 'decrypt'.
 * Based on the chosen option, the method will perform encryption or decryption on the text using the Caesar Cipher technique.
 */
function caesarEncryption(encryption, textInput) {
  let outputResult = "";
  let shift = parseInt(document.getElementById("key").value);
  for (let index = 0; index < textInput.length; index++) {
    let char = textInput[index];
    let charUppercase = char === char.toUpperCase();
    char = char.toUpperCase();
    let charUnicode = char.charCodeAt(0);

    if (charUnicode >= 65 && charUnicode <= 90) {
      let newChar =
        encryption === "encrypt"
          ? ((charUnicode - 65 + shift) % 26) + 65
          : ((charUnicode - 65 - shift + 26) % 26) + 65;
      charUppercase
        ? (outputResult += String.fromCharCode(newChar))
        : (outputResult += String.fromCharCode(newChar).toLowerCase());
    } else {
      outputResult += char;
    }
  }
  return outputResult;
}
/**
 * The vigenereEncryption function implements the Vigenere cipher encryption or decryption algorithm.
 * It takes two parameters:
 * encryption (indicating the operation to perform, either "encrypt" or "decrypt")
 * and textInput (the text to be encrypted or decrypted).
 */
function vigenereEncryption(encryption, textInput) {
  let outputResult = "";
  let key = document.getElementById("key").value.toUpperCase();
  let keyIndex = 0;

  for (let i = 0; i < textInput.length; i++) {
    let textInputChar = textInput[i];
    let textInputCharUppercase = textInputChar === textInputChar.toUpperCase();
    textInputChar = textInputChar.toUpperCase();
    let textInputCharUnicode = textInputChar.charCodeAt(0);

    let keyChar = key[keyIndex % key.length];
    let keyCharUnicode = keyChar.charCodeAt(0);

    if (textInputCharUnicode >= 65 && textInputCharUnicode <= 90) {
      let newChar =
        encryption === "encrypt"
          ? ((textInputCharUnicode - 65 + (keyCharUnicode - 65)) % 26) + 65
          : ((textInputCharUnicode - 65 - (keyCharUnicode - 65) + 26) % 26) +
            65;
      textInputCharUppercase
        ? (outputResult += String.fromCharCode(newChar))
        : (outputResult += String.fromCharCode(newChar).toLowerCase());
      keyIndex++;
    } else {
      outputResult += String.fromCharCode(textInputCharUnicode);
    }
  }
  return outputResult;
}
/**
 * This function identifies the selected encryption and encryption options in the HTML document and calls the corresponding encryption function.
 * It also triggers the `showResult` function with the returned value from the encryption function (Caesar or Vigenere).
 */
function generateResult() {
  let encryption = document.querySelector(
    'input[name="encryption"]:checked'
  ).value;
  let encryptionType = document.querySelector(
    'input[name="encryption-type"]:checked'
  ).value;
  let textInput = document.getElementById("text-input").value;
  if (encryptionType === "caesar") {
    outputResult = caesarEncryption(encryption, textInput);
    // Hide the info-three
    opacityChange("hide", document.getElementById("info-three"));
    showResult(outputResult);
  } else {
    outputResult = vigenereEncryption(encryption, textInput);
    // Hide the info-three
    opacityChange("hide", document.getElementById("info-three"));
    showResult(outputResult);
  }
}
/**
 * This function sets the innerHTML of the div with the ID 'result-div' to display the encrypted text (result).
 */
function showResult(outputResult) {
  let resultDiv = document.getElementById("result-div");
  resultDiv.innerHTML = `
    <h3>Result</h3>
    <textarea class="encrypt-box__text" rows="4" readonly>${outputResult}</textarea>
  `;
  resultDiv.style.display = "flex";
}
/**
 * This function modifies the opacity and display properties of an HTML element. It takes two inputs: type ("hide" or "show") and the element (HTML element).
 * If the type is "hide", it immediately sets the opacity to "0" and after 2000ms, sets the display to "none".
 * If the type is "show", it immediately sets the display to "flex" and after 50ms (to ensure proper application of the CSS property "transition: opacity 2s;"), sets the opacity to "1".
 */
function opacityChange(type, element) {
  if (type === "hide") {
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.display = "none";
    }, 2000);
  } else {
    element.style.display = "flex";
    setTimeout(() => {
      element.style.opacity = "1";
    }, 50);
  }
}

/**
 * This function updates the HTML content of the div with the id "encryptionKeyContainer" to display the appropriate text and attributes based on the input "encryption".
 */
function updateEncryptionKeyContainer(encryption) {
  opacityChange("show", document.getElementById("encryptionKeyContainer"));
  opacityChange("hide", document.getElementById("info-two"));
  if (encryption === "caesar") {
    document.getElementById("encryptionKeyContainer").innerHTML = `
    <h3 class="encrypt-box__title-three">Shift Number</h3>
    <p class="encrypt-box__info-text" id="info-three"><i class="fa-solid fa-circle-info"></i> In the Caesar cipher, a number shift is required to specify the amount by which each character in the text should be shifted. This shift value determines the transformation of the text, shifting each character a specified number of times.</p>
    <input class="encrypt-box__key" type="number" name="key" id="key" min="1" max="26" placeholder="1" value="1" required>
    `;
    let encryptionKey = document.getElementById("key");
    encryptionKey.style.width = "40px";
  } else if (encryption === "vigenere") {
    document.getElementById("encryptionKeyContainer").innerHTML = `
      <h3 class="encrypt-box__title-three">Key</h3>
      <p class="encrypt-box__info-text" id="info-three"><i class="fa-solid fa-circle-info"></i> In the Vigenere cipher, a keyword needs to be provided to determine the shifting for each character in the text. The keyword is used cyclically to perform the shifting operation on the text.</p>
      <input class="encrypt-box__key" type="text" name="key" id="key" maxlength = "15" required>
      `;
  }
  opacityChange("show", document.getElementById("encryptionInputContainer"));
  opacityChange("show", document.getElementById("buttonsContainer"));
}
