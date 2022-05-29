function createSlides() {
  var id = DriveApp.getFoldersByName("Clase_TIC").next().getId();
  var dir = DriveApp.getFolderById(id);
  var slide = SlidesApp.create("GoogleSlide");
  var background = DriveApp.getFilesByName("fondo-tic.png").next().getBlob();
  var slide0 = slide.getSlides()[0];
  slide0.getBackground().setPictureFill(background);
  slide0
    .insertTextBox("LAS TICs EN LA EDUCACIÓN", 50, 100, 500, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(36);
  slide0
    .insertTextBox("UNIVERSIDAD EUROPEA DEL ATLANTICO", 150, 255, 500, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(128, 62, 62)
    .setFontFamily("Comic Sans MS")
    .setFontSize(18);
  slide0
    .insertTextBox("INGENIERÍA INFORMÁTICA", 150, 280, 500, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(128, 62, 62)
    .setFontFamily("Comic Sans MS")
    .setFontSize(18);
  slide0
    .insertTextBox("Hecho por Franklin López", 150, 300, 500, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(128, 62, 62)
    .setFontFamily("Comic Sans MS")
    .setFontSize(18);
  var slide1 = slide.appendSlide();
  slide1.getBackground().setPictureFill(background);
  slide1
    .insertTextBox("Las Tics: ", 50, 140, 200, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(25);
  slide1
    .insertTextBox(
      "son herramientas que fortalecen la enseñanza y el aprendizaje, así como aumentan las oportunidades para acceder al conocimiento",
      50,
      170,
      300,
      50
    )
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(25);
  slide1
    .insertTextBox("Herramientas de colaboración", 360, 100, 350, 30)
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(18);
  slide1
    .insertTextBox(
      "Office 365. Este software incluye las herramientas de trabajo educativo mayormente utilizadas como lo son Excel, Word y Power Point, todas en un espacio de compartimiento entre docentes y alumnos de la clase.",
      360,
      130,
      380,
      30
    )
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(14);
  slide1
    .insertTextBox(
      "Google Drive. Una herramienta de la nube que te permite compartir, acceder y editar documentos en tiempo real junto con otros usuarios mediante sus redes.",
      395,
      200,
      380,
      30
    )
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(14);
  var slide2 = slide.appendSlide();
  slide2.getBackground().setPictureFill(background);
  slide2
    .insertTextBox("Herramientas para comunicarse", 360, 100, 350, 30)
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(18);
  slide2
    .insertTextBox(
      "Zoom. Altamente utilizado en la educación virtual para grabar o impartir clases por videollamada en tiempo real.",
      360,
      130,
      380,
      30
    )
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(14);
  slide2
    .insertTextBox(
      "Google Classroom. Excelente herramienta mediante la cual el docente comunica las asignaciones, donde los estudiantes pueden dejar comentarios o dudas acerca de cualquier tarea.",
      395,
      200,
      380,
      30
    )
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(14);
  slide2
    .insertImage(
      "https://sites.google.com/site/educarconunclick/_/rsrc/1258946633480/como-implementar-las-tic-en-el-aula/tics.JPG?height=358&width=351"
    )
    .setHeight(345)
    .setTop(60);
  var slide3 = slide.appendSlide();
  slide3.getBackground().setPictureFill(background);
  var table = slide3.insertTable(5, 2);
  slide3
    .insertTextBox("Ventajas", 287, 40, 500, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(36);
  table
    .getRow(0)
    .getCell(0)
    .getText()
    .setText("Facilitan la comprensión")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(0)
    .getCell(1)
    .getText()
    .setText("Fomentan la alfabetización digital y audiovisual")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(1)
    .getCell(0)
    .getText()
    .setText("Aumentan la autonomía del estudiante")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(1)
    .getCell(1)
    .getText()
    .setText("Enseñan a trabajar y colaborar en equipo")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(2)
    .getCell(0)
    .getText()
    .setText("Ayudan a desarrollar un mayor pensamiento crítico")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(2)
    .getCell(1)
    .getText()
    .setText("Flexibilizan la enseñanza")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(3)
    .getCell(0)
    .getText()
    .setText("Agilizan la comunicación entre toda la comunidad educativa")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(3)
    .getCell(1)
    .getText()
    .setText("Incrementan la motivación")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(4)
    .getCell(0)
    .getText()
    .setText("Renuevan los métodos de aprendizaje y sus procesos")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  table
    .getRow(4)
    .getCell(1)
    .getText()
    .setText("Aprovechan más el tiempo en clase")
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(10.5);
  var slide4 = slide.appendSlide();
  slide4.getBackground().setPictureFill(background);
  slide4
    .insertTextBox("Tics: ", 50, 140, 200, 50)
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(25);
  slide4
    .insertTextBox(
      "LAS TIC´S Y SU IMPORTANCIA EN LA EDUCACIÓN INICIAL",
      50,
      170,
      300,
      50
    )
    .getText()
    .getTextStyle()
    .setForegroundColor(6, 3, 3)
    .setFontFamily("Comic Sans MS")
    .setFontSize(25);
  slide4
    .insertVideo("https://www.youtube.com/watch?v=6ZySuLylvHk")
    .setLeft(360)
    .setTop(60);
  var slideFile = DriveApp.getFileById(slide.getId());
  dir.addFile(slideFile);
}
