document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reservation successfully made!');
    this.reset(); // Reset form after submission
});
