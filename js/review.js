// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();
hour =7;

if (hour < 12) {
// Morning
// document.getElementById("greetings").innerText = "Good Morning";} 
// document.getElementById("image").src = "img/Morning.jpg"
document.querySelector(".night").classList.add("d-none");
  document.querySelector(".afternoon").classList.add("d-none");
}
else if(hour < 17){
// Afternoon
// document.getElementById("greeting").innerText = "Good Afternoon";
// document.getElementById("image").src = "img/Afternoon.jpg"
document.querySelector(".morning").classList.add("d-none");
  document.querySelector(".night").classList.add("d-none");
 }
else {
// Night
// document.getElementById("greeting").innerText = "Good Night";
// document.getElementById("image").src = "img/Night.jpg"
document.querySelector(".morning").classList.add("d-none");
  document.querySelector(".afternoon").classList.add("d-none");
}
