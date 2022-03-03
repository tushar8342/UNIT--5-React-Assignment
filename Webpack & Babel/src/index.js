
import("./index.css")

import Icon from './icon.jpeg'

const h1 = document.createElement("h1")                  //for text
h1.innerText = "Wellcme to Google Notes"
h1.classList.add("redtext")

let myIcon = document.createElement("img")               //or  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("imageeeee")



//   <div id="appendtext"></div>

  let input = document.createElement("input")
  input.classList.add("inputbox")

  let button = document.createElement("button")
  button.textContent = "Save Notes"
  button.classList.add("submitbtn")
  button.onclick = () =>{
    let val = input.value
    let p = document.createElement("p")
    p.innerHTML = val
    document.getElementById("appendtext").append(p)

  }
  

  document.getElementById("my_note").append(input,button)

  document.getElementById("imageee").appendChild(myIcon);
  document.getElementById("root").append(h1)