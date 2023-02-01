// alert('Ok?');
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple'];
let colorIndex = 0;
let shapes = ['round', 'square', 'oval', 'triangle', 'diamond'];
let shapeIndex = 0;

const button = document.querySelector('button');

button.onclick = function() {
   if (colorIndex < colors.length-1) {
      colorIndex++;
   } else {
      colorIndex = 0;
   }

   if (shapeIndex < shapes.length-1) {
      shapeIndex++;
   } else {
      shapeIndex = 0;
   }

   button.style.backgroundColor = colors[colorIndex];
   button.style.borderRadius = shapeIndex + "px";
}