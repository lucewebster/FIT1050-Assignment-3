// This function creates an popup alert when a user has subscribed to the newsletter.
function showMessage() {
    alert("Thank you for Subscribing to our Newsletter!");
}

document.getElementById("subscribe-button").addEventListener("click", function(event) {
    event.preventDefault(); 
    showMessage();
});
