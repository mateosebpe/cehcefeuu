function loadModal (URLjson) {
  $.getJSON(URLjson, function(data) {
    var fileList = $("#fileList");
    fileList.empty();

    // Loop through each item in the JSON data
    $.each(data, function(index, item) {
      // Create list item for each PDF file
      var listItem = $("<li>").addClass("list-group-item d-flex align-items-center");

      // Create a div for the file details
      var fileDetails = $("<div>").addClass("flex-grow-1");

      // Create span elements for name, size, and download button
      var fileName = $("<strong>").text(item.name);
      var fileSize = $("<span>").text("Peso: " + item.size);
      var downloadLink = $("<a>").attr("href", item.url).addClass("btn btn-primary btn-sm").text("Descargar");

      // Append spans to the file details div
      fileDetails.append(fileName);
      fileDetails.append("<br>");
      fileDetails.append(fileSize);

      // Append file details and download button to the list item
      listItem.append(fileDetails);
      listItem.append(downloadLink);

      // Append list item to the file list
      fileList.append(listItem);
    });
  });
}
 