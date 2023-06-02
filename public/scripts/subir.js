const uploadFile =  (async ()=> {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('myimage.pdf', file);

        // Post the form, just make sure to set the 'Content-Type' header
        const res = await axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // Aquí puedes mostrar una notificación o realizar otras acciones después de guardar el archivo
        alert('El archivo se ha guardado correctamente.');
    } else {
        alert('No se ha seleccionado ningún archivo.');
    }
});