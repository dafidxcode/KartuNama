document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const cardPreview = document.getElementById('card-preview');
    const cardFront = document.querySelector('.card-front');
    const logoUpload = document.getElementById('logo-upload');
    const logoImg = document.getElementById('logo-img');
    const bgColorPicker = document.getElementById('bg-color');
    const textColorPicker = document.getElementById('text-color');
    const accentColorPicker = document.getElementById('accent-color');
    const fontSizeSelector = document.getElementById('font-size');
    const downloadBtn = document.getElementById('download-btn');
    
    // Logo upload handler
    logoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                logoImg.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Background color handler
    bgColorPicker.addEventListener('input', function(e) {
        cardFront.style.backgroundColor = e.target.value;
    });
    
    // Text color handler
    textColorPicker.addEventListener('input', function(e) {
        const color = e.target.value;
        document.querySelectorAll('.tagline, .contact-info, .social-icon span').forEach(el => {
            el.style.color = color;
        });
    });
    
    // Accent color handler
    accentColorPicker.addEventListener('input', function(e) {
        const color = e.target.value;
        document.querySelector('.business-name').style.color = color;
        document.querySelector('.hours').style.color = color;
        document.querySelectorAll('.social-icon i').forEach(el => {
            el.style.color = color;
        });
        cardFront.style.borderLeftColor = color;
    });
    
    // Font size handler
    fontSizeSelector.addEventListener('change', function(e) {
        cardFront.classList.remove('font-small', 'font-medium', 'font-large');
        cardFront.classList.add('font-' + e.target.value);
    });
    
    // Download handler
    downloadBtn.addEventListener('click', function() {
        html2canvas(cardFront).then(canvas => {
            const link = document.createElement('a');
            link.download = 'korimart-business-card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
});
