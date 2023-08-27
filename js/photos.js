
function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}

function displayPhotos(photos) {
    const photoContainer = document.getElementById('photos-container');
    for (const photo of photos) {
        const photoDiv = document.createElement('div');

        if(photo.id <= 100){
            photoDiv.innerHTML = `
            <h3>ID: ${photo.id}</h3>
            <h4>Title: ${photo.title}</h4>
            <a href="${photo.url}" target="_blank">
            <img src="${photo.thumbnailUrl}" alt="">
            </a>
            `
            photoContainer.appendChild(photoDiv);
        }
    }

}

loadPhotos();