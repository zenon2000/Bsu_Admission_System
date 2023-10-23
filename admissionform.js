// JavaScript for ID photo validation (size and dimensions)
document.getElementById('id-photo').addEventListener('change', function () {
    const fileInput = this;
    if (fileInput.files.length > 0) {
        const uploadedFile = fileInput.files[0];
        if (uploadedFile.size > 300000) { // 300 KB = 300,000 bytes
            alert('File size exceeds the maximum allowed (300 KB).');
            fileInput.value = ''; // Clear the file input
        } else {
            const img = new Image();
            img.src = URL.createObjectURL(uploadedFile);
            img.onload = function () {
                if (img.width === 602 && img.height === 602) {
                    // The image has the correct dimensions (2x2 inches)
                    const gridItem = document.querySelector('.grid-item');
                    gridItem.innerHTML = ''; // Clear any previous content
                    img.className = 'id-photo-image'; // Add a class to the image
                    gridItem.appendChild(img);

                    // Hide the label with the class "id-photo"
                    document.querySelector('.id-photo').style.display = 'none';
                } else {
                    alert('Please upload a 2x2 (602x602 pixels) ID photo.');
                    fileInput.value = ''; // Clear the file input
                }
            };
        }
    }
});
