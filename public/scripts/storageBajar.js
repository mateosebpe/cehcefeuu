function downloadFile() {
    var fileCategory = document.getElementById('downloadCategory').value;
    var filesInHTML = ``;
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
                // Realiza aquí las acciones correspondientes con el archivo
                filesInHTML += `<div class="list-group-item d-flex w-100 justify-content-between" p-2 my-2">
            <h5 class="w-100">${fileRef.name}</h5>
            <a href="${downloadURL}" class="mx-4">Ver</a>
            <button class="btn btn-outline-primary btn-sm" onclick="deleteFileStorage('${encodeURI(fileRef.fullPath)}')">Eliminar</button>
        </div>`;
                console.log(filesInHTML);
                let viewList = document.getElementById('viewFiles');
                viewList.innerHTML = filesInHTML;
            });


        });
    }).catch(function (error) {
        // Se ejecuta si hay un error al obtener la lista de archivos
        console.log('Error al obtener la lista de archivos:', error);
    });


}
