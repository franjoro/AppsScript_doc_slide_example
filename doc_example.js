function createDoc() {
  const id = DriveApp.getFoldersByName("Clase_TIC").next().getId(); //get the folder id
  const dir = DriveApp.getFolderById(id); //get the folder dir
  //definir estilos
  const textstyle = {};
  textstyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.JUSTIFY;
  textstyle[DocumentApp.Attribute.FONT_FAMILY] = "Arial";
  textstyle[DocumentApp.Attribute.FONT_SIZE] = 18;
  textstyle[DocumentApp.Attribute.BOLD] = true;

  //create a doc
  const doc = DocumentApp.create("Clase TIC");
  //get the name
  const name = doc.getName();
  console.log("Este es el nombre del documento creado", name);

  // crear el header
  const header = doc.addHeader();
  header.appendParagraph("SECCIÓN DE ENCABEZADO");
  header.appendParagraph("El header puede tener 3 elementos:");
  const itemH1 = header.appendListItem("Textos");
  const itemH2 = header.appendListItem("Listas");
  const itemH3 = header.appendListItem("Tablas");
  itemH2.setListId(itemH1);
  itemH3.setListId(itemH1);
  header.appendTable();
  const rowsDataHeader = [["Tabla de ", "Encabezados"]];
  header.appendTable(rowsDataHeader);

  //crear el cuerpo del doc
  const body = doc.getBody();

  const resp = UrlFetchApp.fetch(
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Escudo_UNEATLANTICO.jpg"
  );
  // Append the image to the first paragraph.
  doc.getChild(0).asParagraph().appendInlineImage(resp.getBlob());

  body.insertParagraph(1, "Titulo del body");
  body.appendParagraph(
    "La idea de la clase es la siguiente: cada estudiante debe saber editar documentos en la consola de google"
  );
  // insertar una lista
  const item1 = body.appendListItem("Item 1").setAttributes(textstyle);
  // Incorporamos un segundo item para garantizar que se encuentre en la misma lista.
  const item2 = body.appendListItem("Item 2").setAttributes(textstyle);
  item2.setListId(item1);

  // Log the new list item's list ID.
  Logger.log(item1.getListId());

  //add Table
  body.appendTable();
  //build table
  const rowsData = [
    ["Equipo 1", "Animals"],
    ["Equipo 2", "Goat"],
    ["Equipo 3", "Cat"],
    ["Equipo 4", "Frog"],
    [],
  ];
  body
    .insertParagraph(0, doc.getName())
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(rowsData);
  table.getRow(0).editAsText().setBold(true);

  // crear el footer
  const footer = doc.addFooter();
  footer.appendParagraph("SECCIÓN DE PIE DE PAGINA");
  footer.appendParagraph("El footer puede tener 3 elementos:");
  const itemF1 = footer.appendListItem("Textos");
  const itemF2 = footer.appendListItem("Listas");
  const itemF3 = footer.appendListItem("Tablas");
  itemH2.setListId(itemF1);
  itemH3.setListId(itemF1);
  footer.appendTable();
  const rowsDatafooter = [["Tabla de ", "pie de pagina"]];
  footer.appendTable(rowsDatafooter);

  const docFile = DriveApp.getFileById(doc.getId()); // Get Document as File
  dir.addFile(docFile);
}
