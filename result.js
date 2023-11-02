window.addEventListener('load', () => {
    const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME');
    const idPicture = localStorage.getItem('ID_PICTURE');
    const signature = localStorage.getItem('SIGNATURE');

    document.getElementById('result-name').innerText = name;
    document.getElementById('result-surname').innerText = surname;

    if (idPicture) {
        const imgElement = document.createElement('img');
        imgElement.src = idPicture;
        imgElement.alt = 'ID Picture';
        document.getElementById('result-id-picture').appendChild(imgElement);
    }

    if (signature) {
        const signatureImage = new Image();
        signatureImage.src = signature;
        signatureImage.alt = 'E-Signature';
        document.getElementById('result-signature').appendChild(signatureImage);
    }
});
