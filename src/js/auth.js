// auth.js
// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(e.target);

    try {
        const response = await fetch('login.php', {
            method: 'POST',
            body: formData
        });

        const responseData = await response.json(); // Parse the JSON response

        if (responseData.success) {
            alert(responseData.message); // Show success message
            window.location.href = 'questionnaire.php'; // Redirect to a dashboard or home page
        } else {
            alert(responseData.error); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(e.target);

    try {
        const response = await fetch('signup.php', {
            method: 'POST',
            body: formData
        });

        const responseData = await response.json(); // Parse the JSON response

        if (responseData.success) {
            alert(responseData.message); // Show success message
            e.target.reset(); // Reset the form fields
        } else {
            alert(responseData.error); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
});

// Toggle between login and signup forms
function showLogin() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.classList.add('active'); // Show login form
    signupForm.classList.remove('active'); // Hide signup form
}

function showSignup() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    signupForm.classList.add('active'); // Show signup form
    loginForm.classList.remove('active'); // Hide login form
}