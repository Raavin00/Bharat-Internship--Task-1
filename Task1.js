function submitForm() {
    const titleElem = document.getElementById('title');
    const contentElem = document.getElementById('content');
    const imageElem = document.getElementById('image');
    const videoElem = document.getElementById('video');
    const dataSection = document.getElementById('dataSection');

    let displayData = `<div class="content-card">
    <h3>${titleElem.value}</h3>
    <p>${contentElem.value}</p>`;

    if (imageElem.files[0]) {
        const imagePreview = URL.createObjectURL(imageElem.files[0]);
        displayData += `<img src="${imagePreview}" alt="Uploaded Image" class="uploaded-content">`;
    }

    if (videoElem.files[0]) {
        const videoPreview = URL.createObjectURL(videoElem.files[0]);
        displayData += `<video src="${videoPreview}" controls autoplay class="uploaded-content"></video>`;
    }

    displayData += `</div>`;
    dataSection.innerHTML += displayData;
    titleElem.value = '';
    contentElem.value = '';
    imageElem.value = '';
    videoElem.value = '';
}
