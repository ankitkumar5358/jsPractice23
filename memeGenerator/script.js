showImageBtn.addEventListener('click', () => {
    fetch('https://picsum.photos/200/300')
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;

        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        img.onload = () => {
            URL.revokeObjectURL(url);
        }
        img.oneerror = () => {
            URL.revokeObjectURL(url);
            imageContainer.innerHTML = 'Error occured while loading images'
        }
    })
    .catch(error => {
        imageContainer.innerHTML = 'Error occured while fetching images'
    })
})