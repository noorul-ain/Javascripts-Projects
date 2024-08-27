const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbtn = document.getElementById('qr-button');

console.log(qrbtn, qrimg, qrinput);

qrbtn.addEventListener('click', () => {
    const inputValue = qrinput.value;
    console.log(inputValue);
    if (!inputValue) {
        alert('Please enter a valid URL');
        return;
    } else {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputValue)}`; // Corrected the src assignment
        qrimg.alt = `QR code for ${inputValue}`; // Corrected the alt assignment
    }
});
