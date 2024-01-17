const buttonInstall = document.getElementById("buttonInstall");
//TODO: need a global variable that'll be use in multiple functions


let buttonState;

// TODO: Add an event handler to the `beforeinstallprompt` event



window.addEventListener("beforeinstallprompt", (event) => {

  buttonState = event;

  buttonInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener("click", async () => {

  //TODO: condition logic for if the button(buttonInstall) is clicked.

  if (buttonState) {
    buttonState.prompt();
    const { choice } = await buttonState.userChoice;
    console.log(`User choice: ${choice}`);
  } else {

    //TODO: Disable the button by changing state.
  }
  //TODO: Make the button disappear after it's rendered.
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // TODO: logic updating the UI with a message.
});