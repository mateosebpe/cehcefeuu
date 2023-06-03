
function bajarStorage() {
    var fileCategory = document.getElementById('downloadCategory').value;
    // Obtén una referencia al almacenamiento de Firebase
    var storageRef = firebase.storage().ref();

    // Crea una referencia a la carpeta específica
    var folderRef = storageRef.child(fileCategory);

    // Solicita la lista de archivos en la carpeta
    folderRef.listAll().then(function (result) {
        result.items.forEach(function (fileRef) {
            // Obtiene el nombre del archivo
            var fileName = fileRef.name;

            // Obtiene la URL de descarga del archivo
            fileRef.getDownloadURL().then(function (downloadURL) {
                console.log('Nombre del archivo:', fileName);
                console.log('URL de descarga:', downloadURL);
                // Realiza aquí las acciones correspondientes con el archivo
            });
        });
    }).catch(function (error) {
        // Se ejecuta si hay un error al obtener la lista de archivos
        console.log('Error al obtener la lista de archivos:', error);
    });
}