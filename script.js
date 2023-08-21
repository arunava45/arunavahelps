document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.image-link');

    imageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const largeImageSrc = this.getAttribute('href');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            const image = document.createElement('img');
            image.src = largeImageSrc;
            lightbox.appendChild(image);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});
