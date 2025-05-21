var factList = [
  "In 2014, one in 10 young people experienced a period of major depression. <br><br>Click the Fact Generator again for more facts" ,/*0*/
  "Suicide is the 10th leading cause of death in the United States and accounts for the loss of more than 41,000 American lives each year, more than double the number of lives lost to homicide. <br><br>Click the Fact Generator again for more facts",/*1*/
  "1 in 5 children ages 13 -18 have or will have a serious mental illness. <br><br>Click the Fact Generator again for more facts",/*2*/
  "Depression is the leading cause of disability worldwide. <br><br>Click the Fact Generator again for more facts",/*3*/
  "Youth depression rates have risen from 5.9% to 8.2% since 2012. <br><br>Click the Fact Generator again for more facts",/*4*/
  "1/2 of all mental illnesses show early signs before a person turns 14 years old, and 3/4 of mental illnesses begin before age 24."];/*4*/
  



var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

//Get the button:
scrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
