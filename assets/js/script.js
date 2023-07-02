// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("encryption-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Additional logic or actions to handle the form submission
  });
  //Collect all the buttons from the page
  let buttons = document.getElementsByClassName("encrypt-box__option");
  for (let button of buttons) {
    //Add event listener type click for each option in buttons
    button.addEventListener("click", function () {
      //If click on encrypt or decrypt
      if (this.id === "encrypt" || this.id === "decrypt") {
        let infoOne = document.getElementById("info-one");
        let encryptionTypeDiv = document.getElementById("encryption-type-div");
        //Hide the infoOne text
        infoOne.style.display = "none";
        //Show the encryption type div
        encryptionTypeDiv.style.display = "flex";
        console.log("Encrypt");
      }
      //If click on caesar or vigenere
      else if (this.id === "caesar" || this.id === "vigenere") {
        let infoTwo = document.getElementById("info-two");
        let encryptionResultDiv = document.getElementById(
          "encryption-result-div"
        );
        //Hide the infoTwo text
        infoTwo.style.display = "none";
        //Show the result div
        encryptionResultDiv.style.display = "flex";
      }
    });
  }
  //Since submit button is not radio, there is a different class name for it, so ID is used instead
  let submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function () {
    let encryption = document.querySelector(
      'input[name="encryption"]:checked'
    ).value;
    let encryptionType = document.querySelector(
      'input[name="encryption-type"]:checked'
    ).value;
    let textInput = document.getElementById("text-input").value;
    if (encryptionType === "caesar") {
      console.log(encryption);
      caesarEncryption(encryption, textInput);
    }
  });
});
/*
This function is designed for the Caesar Cipher method. It receives an input parameter called 'encryption' which should be set to either 'encrypt' or 'decrypt'. Based on the chosen option, the method will perform encryption or decryption on the text using the Caesar Cipher technique.
*/
function caesarEncryption(encryption, textInput) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let outputResult = "";
  console.log(`the encryption is: ${encryption}`);
  if (encryption === "encrypt") {
    console.log("cai aqui");
    for (let index = 0; index < textInput.length; index++) {
      let char = textInput[index];
      outputResult += char;
      console.log(char);
    }
    console.log(outputResult);
  }
}
