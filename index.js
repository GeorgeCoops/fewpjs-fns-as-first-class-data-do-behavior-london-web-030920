/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) {
  const time = parseInt(str.split(':')[0])
  if (time < 12){
    return "Good Morning"
  }
  else if (time < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(str) {
  document.querySelector('#greeting').innerText = str
}
