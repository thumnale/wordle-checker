
function wordle(guess) {

  var word = document.querySelector("#word").value;
  var wordArray = word.split("");

  // Split guess into characters
  var char1 = guess.charAt("0");
  var char2 = guess.charAt("1");
  var char3 = guess.charAt("2");
  var char4 = guess.charAt("3");
  var char5 = guess.charAt("4");

  // Populate charaters in HTML
  document.querySelector("#char1").textContent = char1;
  document.querySelector("#char2").textContent = char2;
  document.querySelector("#char3").textContent = char3;
  document.querySelector("#char4").textContent = char4;
  document.querySelector("#char5").textContent = char5;
  
  // Remove classes (there must be a better way)
  if (document.querySelectorAll(".wordle > div")[0].classList.contains("correct")) {
    document.querySelectorAll(".wordle > div")[0].classList.remove("correct");
  }
  if (document.querySelectorAll(".wordle > div")[0].classList.contains("incorrect")) {
    document.querySelectorAll(".wordle > div")[0].classList.remove("incorrect");
  }
  if (document.querySelectorAll(".wordle > div")[1].classList.contains("correct")) {
    document.querySelectorAll(".wordle > div")[1].classList.remove("correct");
  }
  if (document.querySelectorAll(".wordle > div")[1].classList.contains("incorrect")) {
    document.querySelectorAll(".wordle > div")[1].classList.remove("incorrect");
  }
  if (document.querySelectorAll(".wordle > div")[2].classList.contains("correct")) {
    document.querySelectorAll(".wordle > div")[2].classList.remove("correct");
  }
  if (document.querySelectorAll(".wordle > div")[2].classList.contains("incorrect")) {
    document.querySelectorAll(".wordle > div")[2].classList.remove("incorrect");
  }
  if (document.querySelectorAll(".wordle > div")[3].classList.contains("correct")) {
    document.querySelectorAll(".wordle > div")[3].classList.remove("correct");
  }
  if (document.querySelectorAll(".wordle > div")[3].classList.contains("incorrect")) {
    document.querySelectorAll(".wordle > div")[3].classList.remove("incorrect");
  }
  if (document.querySelectorAll(".wordle > div")[4].classList.contains("correct")) {
    document.querySelectorAll(".wordle > div")[4].classList.remove("correct");
  }
  if (document.querySelectorAll(".wordle > div")[4].classList.contains("incorrect")) {
    document.querySelectorAll(".wordle > div")[4].classList.remove("incorrect");
  }



  // Check characters against word
  // NEED A SOLVE FOR DOUBLE LETTERS

  if (wordArray.includes(char1)) {
    if (char1 === wordArray[0]) {
        document.querySelector("#char1").classList.add("correct");
    } else {
        document.querySelector("#char1").classList.add("incorrect");
    }
  }
  if (wordArray.includes(char2)) {
    if (char2 === wordArray[1]) {
        document.querySelector("#char2").classList.add("correct");
    } else {
        document.querySelector("#char2").classList.add("incorrect");
    }
  }
  if (wordArray.includes(char3)) {
    if (char3 === wordArray[2]) {
        document.querySelector("#char3").classList.add("correct");
    } else {
        document.querySelector("#char3").classList.add("incorrect");
    }
  }
  if (wordArray.includes(char4)) {
    if (char4 === wordArray[3]) {
        document.querySelector("#char4").classList.add("correct");
    } else {
        document.querySelector("#char4").classList.add("incorrect");
    }
  }
  if (wordArray.includes(char5)) {
    if (char5 === wordArray[4]) {
        document.querySelector("#char5").classList.add("correct");
    } else {
        document.querySelector("#char5").classList.add("incorrect");
    }
  }

} // End wordle function
