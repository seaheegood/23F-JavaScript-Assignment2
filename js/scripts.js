// constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumber = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
  const inputValue = customNumber.value;

  if (inputValue < 0 || inputValue > 100) {
    document.body.style.backgroundColor = "red";
  } else if (inputValue >= 0 && inputValue <= 20) {
    document.body.style.backgroundColor = "green";
  } else if (inputValue > 20 && inputValue <= 40) {
    document.body.style.backgroundColor = "blue";
  } else if (inputValue > 40 && inputValue <= 60) {
    document.body.style.backgroundColor = "orange";
  } else if (inputValue > 60 && inputValue <= 80) {
    document.body.style.backgroundColor = "purple";
  } else if (inputValue > 80 && inputValue <= 100) {
    document.body.style.backgroundColor = "yellow";
  }

  myStudentId.textContent = "Student ID: 200530585";
}

// function to change bg color from random no.
function changeRandomColor() {
  const randomValue = Math.floor(Math.random() * 100) + 1;
  changeCustomColor(); // Reuse the function to set background color
  customNumber.value = randomValue; // Display the random value in the input field
}

// function to generate options for select list
function addList() {
  const imageSources = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
  ];

  imageSelect.innerHTML = "";

  // Add a default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Please choose…";
  imageSelect.appendChild(defaultOption);

  // Loop through the array to add options
  for (const src of imageSources) {
    const option = document.createElement("option");
    option.value = src;
    option.textContent = src;
    imageSelect.appendChild(option);
  }
  // Tip: you might have to check length condition so that the list does not keep growing when clicked
  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
}

// function to change image
function changeImage() {
  const selectedSrc = imageSelect.value;
  images.src = "img/" + selectedSrc;
}

// Event listeners for the "Change custom color" button
custColorButton.addEventListener("click", changeCustomColor);

// Event listener for the "Change random color" button
randColorButton.addEventListener("click", changeRandomColor);

// Event listener to generate options for the select list
imageSelect.addEventListener("focus", addList);

// Event listener for the select list to change the image
imageSelect.addEventListener("change", changeImage);
