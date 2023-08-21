document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.image-link');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');

    imageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const largeImageSrc = this.getAttribute('href');
            const lightboxImage = document.createElement('img');
            lightboxImage.src = largeImageSrc;
            lightboxImage.className = 'lightbox-image-container';
            
            // Append the image to the lightbox overlay
            lightboxOverlay.innerHTML = '';
            lightboxOverlay.appendChild(lightboxImage);

            // Show the lightbox overlay
            lightboxOverlay.classList.add('lightbox-show');
        });
    });

    // Close the lightbox on overlay click
    lightboxOverlay.addEventListener('click', function () {
        this.classList.remove('lightbox-show');
    });
});
