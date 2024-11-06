// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();
// let hour =

if(hour <= 12){
if (hour < 12) {
// Morning
document.getElementById("greetings").innerText = "Good Morning";} 
document.getElementById("image").src = "img/morning.jpg"
}
 if(hour < 17){
// Afternoon
document.getElementById("greeting").innerText = "Good Afternoon";
document.getElementById("image").src = "img/highnoon.jpg"
 }
else {
// Night
document.getElementById("greeting").innerText = "Good Night";
document.getElementById("image").src = "img/Night.jpg"
}






//let greetingElement = document.getElementById("greeting");
//console.log(greetingElement);