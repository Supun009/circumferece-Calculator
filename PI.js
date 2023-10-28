const PI= 3.314159;
let radius;
let circumferece;



document.getElementById("mySubmit").onclick = function() {
   radius = document.getElementById("myText").value;
   radius = Number(radius);
   circumferece = 2 * PI * radius;
   document.getElementById("myH3").textContent = "Circumferece" + ""+ circumferece + "cm";
   document.getElementById("myText").value = "";
}
