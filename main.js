// Write class below
//as

class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
    this._alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(string1) {
    let shiftedString = "";
    //for each letter of string
    for (let i = 0; i < string1.length; i++) {
      //set the character at the index to char
      let char = string1[i];
      //change the character to lower case
      if (char === char.toUpperCase()) {
        //convert to lowercase if it is
        char = char.toLowerCase();
      }
      //log the character so i know its being set
      console.log(char);
      //check the index of the letter against the alphabet
      let indexOfMatch = this._alphabet.indexOf(char);

      if (indexOfMatch !== -1) {
        //get the index of the match and shift it by amount defined
        console.log("before the shift:" + indexOfMatch);
        indexOfMatch += this._shift;
        //log the shift change
        console.log("after the shift: " + indexOfMatch);
        //handle wrapping
        indexOfMatch = (indexOfMatch + 26) % 26;
        //set the shifted character based on the index of the newly shifted index in the alphabet
        let shiftedCharacter = this._alphabet[indexOfMatch];
        //log the newly shifted character
        console.log(`newly shifted character is:  ${shiftedCharacter}`);
        console.log("******************************************************");
        //append the string
        shiftedString += shiftedCharacter;
      } else {
        //append the string if no index of character is found
        shiftedString += char;
      }
    }

    return shiftedString.toUpperCase();
  }

  decrypt(string1) {
    let shiftedString = "";
    //for each letter of string
    for (let i = 0; i < string1.length; i++) {
      //set the character at the index to char
      let char = string1[i];
      //change the character to lower case
      if (char === char.toUpperCase()) {
        //convert to lowercase if it is
        char = char.toLowerCase();
      }
      //log the character so i know its being set
      console.log(char);
      //check the index of the letter against the alphabet
      let indexOfMatch = this._alphabet.indexOf(char.toLowerCase());

      if (indexOfMatch !== -1) {
        //get the index of the match and shift it by amount defined
        console.log("before the shift:" + indexOfMatch);
        indexOfMatch -= this._shift;
        //log the shift change
        console.log("after the shift: " + indexOfMatch);
        //handle wrapping
        indexOfMatch = (indexOfMatch + 26) % 26;
        //set the shifted character based on the index of the newly shifted index in the alphabet
        let shiftedCharacter = this._alphabet[indexOfMatch];
        //log the newly shifted character
        console.log(`newly shifted character is:  ${shiftedCharacter}`);
        console.log("******************************************************");
        //append the string
        shiftedString += shiftedCharacter;
      } else {
        //append the string if no index of character is found
        shiftedString += char;
      }
    }

    return shiftedString;
  }
}

const cipher = new ShiftCipher(1);

console.log(cipher.encrypt("ABC"));
