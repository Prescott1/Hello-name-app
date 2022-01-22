const sayName = () => {
    let humanReadableName;
    let nameValue = document.getElementById("input-name").value;
    if (nameValue == "") {
      humanReadableName = "Please enter your name.";
    } else {
      humanReadableName = `Hello ${nameValue}!`;
    }
    document.getElementById("output-name").innerHTML = humanReadableName;
  }; 