// Smooth scrolling for navigation links
document.querySelectorAll('header ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align to the top of the section
            });
        }
    });
});

// Form validation for the contact form
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Validate name
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            messageInput.focus();
            return;
        }

        // If all validations pass, submit the form (or handle it as needed)
        alert('Form submitted successfully!');
        contactForm.reset(); // Clear the form
    });
}

// Optional: Add dynamic behavior to the "more about me" button
const moreAboutMeButton = document.querySelector('button');
if (moreAboutMeButton) {
    moreAboutMeButton.addEventListener('click', function () {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align to the top of the section
            });
        }
    });
}

// Make social media icons clickable and redirect to their respective profiles
const socialIcons = {
    instagram: document.querySelector('.fa-instagram'),
    facebook: document.querySelector('.fa-facebook'),
    whatsapp: document.querySelector('.fa-whatsapp'),
    linkedin: document.querySelector('.fa-linkedin')
};

if (socialIcons.instagram) {
    socialIcons.instagram.addEventListener('click', function () {
        window.open('https://www.instagram.com/your_username/', '_blank'); // Replace with your Instagram profile URL
    });
}

if (socialIcons.facebook) {
    socialIcons.facebook.addEventListener('click', function () {
        window.open('https://www.facebook.com/your_username/', '_blank'); // Replace with your Facebook profile URL
    });
}

if (socialIcons.whatsapp) {
    socialIcons.whatsapp.addEventListener('click', function () {
        window.open('https://wa.me/your_phone_number', '_blank'); // Replace with your WhatsApp link
    });
}

if (socialIcons.linkedin) {
    socialIcons.linkedin.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/your_username/', '_blank'); // Replace with your LinkedIn profile URL
    });
}
