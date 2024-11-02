document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var carModel = document.getElementById('car-model').value;
    var rentalDates = document.getElementById('rental-dates').value;
    var message = document.getElementById('message').value;

    if (name && email && phone && carModel && rentalDates && message) {
        alert('Form submitted successfully!');
        // Here you would typically handle the form submission to your backend service
    } else {
        alert('Please fill in all fields.');
    }
});
