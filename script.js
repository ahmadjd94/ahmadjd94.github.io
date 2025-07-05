document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to (August 5th, 2025 at 8:00 PM)
    const targetDate = new Date('August 5, 2025 20:00:00').getTime();
    
    // Image slideshow functionality
    const slideshowContainer = document.querySelector('.slideshow');
    const imageFiles = [
        'images/BA1A0640.JPG',
        'images/BA1A0673.JPG',
        'images/BA1A0991.JPG'
    ];
    
    // Create image elements
    imageFiles.forEach((image, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('slideshow-image');
        imageDiv.style.backgroundImage = `url(${image})`;
        
        // Make the first image active
        if (index === 0) {
            imageDiv.classList.add('active');
        }
        
        slideshowContainer.appendChild(imageDiv);
    });
    
    // Function to rotate images
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    let currentImageIndex = 0;
    
    function rotateImages() {
        // Remove active class from all images
        slideshowImages.forEach(img => img.classList.remove('active'));
        
        // Move to the next image
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        
        // Add active class to the current image
        slideshowImages[currentImageIndex].classList.add('active');
    }
    
    // Start the slideshow rotation (change image every 5 seconds)
    setInterval(rotateImages, 5000);
    
    // Update the countdown every 1 second
    const countdownTimer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = targetDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the results
        document.getElementById('days').textContent = formatTime(days);
        document.getElementById('hours').textContent = formatTime(hours);
        document.getElementById('minutes').textContent = formatTime(minutes);
        document.getElementById('seconds').textContent = formatTime(seconds);
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            document.querySelector('.message').textContent = "The event has started!";
        }
    }, 1000);
    
    // Add leading zero if number is less than 10
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
});
