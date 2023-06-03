function deleteFileStorage (url) {
    var storageRef = firebase.storage().ref();
    let fileRef = storageRef.child(url);
    fileRef.delete().then(function() {
        alert('Archivo eliminado correctamente');
      }).catch(function(error) {
        alert('Error al eliminar el archivo:', error);
      });
}