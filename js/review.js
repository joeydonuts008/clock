// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();

// Hide all sections by default
document.querySelector(".morning").classList.add("d-none");
document.querySelector(".afternoon").classList.add("d-none");
document.querySelector(".night").classList.add("d-none");

// Show the appropriate section based on the time of day
if (hour < 12) {
    // Morning
    document.querySelector(".morning").classList.remove("d-none");
} else if (hour < 17) {
    // Afternoon
    document.querySelector(".afternoon").classList.remove("d-none");
} else {
    // Night
    document.querySelector(".night").classList.remove("d-none");
}

// Add event listeners to buttons
document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        // Hide all sections
        document.querySelector(".morning").classList.add("d-none");
        document.querySelector(".afternoon").classList.add("d-none");
        document.querySelector(".night").classList.add("d-none");
        
        // Show the selected section based on the button clicked
        document.querySelector(`.${target}`).classList.remove("d-none");
    });
});
