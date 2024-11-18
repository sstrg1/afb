setTimeout(function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loginPopup').style.display = 'block';
}, 5000);

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const formData = { username, password };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

    .then(response => response.json())
    .then(data => {

        console.log(data);
        // console.log('Server response:', data);
        
        // if (data.success && data.shouldCloseOverlay) {
        //     // Clear the form and hide the popup
        //     this.reset();
        //     document.getElementById('overlay').style.display = 'none';
        //     document.getElementById('loginPopup').style.display = 'none';
        //     alert(data.message);
        // } else {
        //     // Login failed
        //     alert(data.message || 'Login failed. Please try again.');
        // }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});