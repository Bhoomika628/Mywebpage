// Welcome message based on time
function setWelcome() {
    let msg = "";
    let hour = new Date().getHours();

    if (hour < 12) {
        msg = "Good Morning";
    } else if (hour < 18) {
        msg = "Good Afternoon ";
    } else {
        msg = "Good Evening ";
    }

    document.getElementById("welcome").innerText = msg + "Welcome to my Portfolio";
}

// Button action
function showMessage() {
    document.getElementById("demo").innerText = "Thanks for visiting my website ";
}

// Run on load
setWelcome();