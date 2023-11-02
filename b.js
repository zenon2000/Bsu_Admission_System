let signaturePad;

window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas');
    signaturePad = new SignaturePad(canvas);

    document.getElementById('clear-signature').addEventListener('click', () => {
        signaturePad.clear();
    });

    document.getElementById('id_picture').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('id_picture_preview_img').src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
});

function handleSubmit() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const signature = signaturePad.toDataURL();
    const idPicture = document.getElementById('id_picture_preview_img').src;

    localStorage.setItem('NAME', name);
    localStorage.setItem('SURNAME', surname);
    localStorage.setItem('SIGNATURE', signature);
    localStorage.setItem('ID_PICTURE', idPicture);
    window.location.href = 'result.html';
}
