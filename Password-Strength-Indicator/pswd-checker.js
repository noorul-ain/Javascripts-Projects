const pswdinput = document.querySelector('#password');
const pswdoutput = document.querySelector('#output');
const strengthBar = document.querySelector('#strength-bar');
const popup = document.querySelector('#popup');
const popupMessage = document.querySelector('#popup-message');
const closePopup = document.querySelector('#close-popup');

// Add event listener for password input
pswdinput.addEventListener('input', function() {
    let password = pswdinput.value;
    let strength = 0;

    // Check for password length
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.length >= 12) {
        strength += 1;
    }

    // Check for lowercase, uppercase, numbers, and special characters
    if (password.search(/[a-z]/) != -1) {
        strength += 1;
    }
    if (password.search(/[A-Z]/) != -1) {
        strength += 1;
    }
    if (password.search(/[0-9]/) != -1) {
        strength += 1;
    }
    if (password.search(/[@#$%^&*(),.?":{}|<>]/) != -1) {
        strength += 1;
    }

    // Update the strength bar and message based on strength
    switch (strength) {
        case 0:
            strengthBar.style.width = "0%";
            pswdoutput.innerText = "";
            break;
        case 1:
            strengthBar.style.width = "25%";
            pswdoutput.innerText = "Very Weak";
            break;
        case 2:
            strengthBar.style.width = "50%";
            pswdoutput.innerText = "Weak";
            break;
        case 3:
            strengthBar.style.width = "75%";
            pswdoutput.innerText = "Moderate";
            break;
        case 4:
            strengthBar.style.width = "100%";
            pswdoutput.innerText = "Strong";
            break;
    }

    // Optional: Show popup if strength exceeds a certain level
    if (strength > 5) {
        popup.style.display = 'block'; // Show popup
        popupMessage.innerText = "Your password is very strong!";
    } else {
        popup.style.display = 'none'; // Hide popup
    }
});

// Close popup on button click
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});
