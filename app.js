
// Element Selectors
const changeColor = document.querySelector('.change-color');
const displayColor = document.querySelector('.display-color');

// event listener
changeColor.addEventListener('click', pickColor);

function pickColor() {
  // const colorType = ['rgba', 'hex'];
  var chooseType = Math.floor(Math.random()*2);
  switch(chooseType) {
    case 0:
      pickHexColor();
      break;
    case 1:
      pickRgbaColor();
      break;
  };
};

function pickHexColor() {
  // set the digit range for hex colors
  const hexRange = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];

  // set hex color to empty with a hash only
  var hexColor = "#";
  // loop 6 times (the number of digits in a hex string)
  for(var i = 0; i < 6; i++) {
    // save a random index from the hexRange array into the randomIndex var
    var randomIndex = hexRange[Math.floor(Math.random()* hexRange.length)];
    // add each random index to the hexColor variable. converted to a string
    hexColor = hexColor + randomIndex.toString();
  }
  // display the chosen color in the "Display Color div"
  displayColor.innerHTML ="Background Color: " + hexColor.fontcolor('lightblue');
  // set the background to the chosen color!
  document.body.style.backgroundColor = hexColor;
}

function pickRgbaColor() {
  var rgbArray = [];

  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random()*256);
    rgbArray.push(randomNumber);
  };
  let rgbColor = "rgb(" + rgbArray[0].toString() + 
                  "," + rgbArray[1].toString() + 
                  "," + rgbArray[2].toString() + 
                  ")";
  // display the chosen color in the "Display Color div"
  displayColor.innerHTML = "Background Color: " + rgbColor.fontcolor('lightblue');
  // set the background to the chosen color!
  document.body.style.backgroundColor = rgbColor;
}


