function showMessage() {
    alert("Thank you for Subscribing to our Newsletter!");
}

document.getElementById("subscribe-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    showMessage();
});
