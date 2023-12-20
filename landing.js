// Hacer la solicitud a la API usando fetch
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Obtener una lista de URLs de imágenes de los productos (debes adaptar el parsing según la estructura de la respuesta)
        const imageUrls = data.map(product => product.image_link);

        // Seleccionar una imagen aleatoria de la lista
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // Establecer la URL de la imagen aleatoria en la etiqueta img
        document.getElementById('randomImage').src = randomImageUrl;
    })
    .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
    });

    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Obtener una lista de URLs de imágenes de los productos (debes adaptar el parsing según la estructura de la respuesta)
        const imageUrls = data.map(product => product.image_link);

        // Seleccionar una imagen aleatoria de la lista
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // Establecer la URL de la imagen aleatoria en la etiqueta img
        document.getElementById('randomImage1').src = randomImageUrl;
    })
    .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
    });