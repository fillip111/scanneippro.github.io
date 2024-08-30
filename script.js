document.addEventListener("DOMContentLoaded", function() {
const ctaButton = document.getElementById('cta-button');
const downloadButton = document.getElementById('download-button');

ctaButton.addEventListener('click', function() {
alert('Takk for din interesse! Mer informasjon kommer snart.');
});

downloadButton.addEventListener('click', function() {
const link = document.createElement('a');
link.href = 'https://github.com/MidGuy11/Download/releases/download/Download/Client.zip';
link.download = '';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});
});
