window.addEventListener("load", onLoad);
function onLoad() {
  // auto update copyright date
  const copyright = document.getElementById("copyright");
  if (copyright) {
    const copyrightText = `This Lesson was from The Complete Web Development Bootcamp found on Udemy.`;
    copyright.innerHTML = copyrightText;
  };
};

// Select all buttons
const drumButton = document.querySelectorAll(".drum");
// addEventListener forEach button press
drumButton.forEach(button => {
    button.addEventListener("click", () => {
      // button.style.color = "#fff";
      const buttonInnerHTML = button.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }); 
});

// addEventListener for keyboard press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("./sounds/tom-2.mp3").play();
    break;
    case "s":
      new Audio("./sounds/tom-3.mp3").play();
    break;
    case "d":
      new Audio("./sounds/tom-4.mp3").play();
    break;
    case "j":
      new Audio("./sounds/crash.mp3").play();
    break;
    case "k":
      new Audio("./sounds/snare.mp3").play();
    break;
    case "l":
      new Audio("./sounds/kick-bass.mp3").play();
    break;
    default:
      console.log(buttonInnerHTML);
    break;
  }
};

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
};


