// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
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
      if (this.id === "caesar" || this.id === "vigenere") {
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
});
