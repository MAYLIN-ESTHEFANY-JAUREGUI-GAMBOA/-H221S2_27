
/* Crear base de datos colectivo sur real */
CREATE DATABASE colectivo_sur_real;

/* Poner en uso la base de datos */
USE colectivo_sur_real;

/* Crear tabla usuario */
CREATE TABLE usuario
(
     IDUSER int AUTO_INCREMENT,
     NOMUSER varchar(80),
     EMAUSER varchar(80),
     CELUSER char(9),
     PROUSER varchar(80),
	 LDPUSER varchar(250),
     PRIMARY KEY (IDUSER)
);

/* Insertar usuario */
INSERT INTO usuario
(NOMUSER, EMAUSER, CELUSER, PROUSER, LDPUSER)
VALUES
('José Ramírez', 'jose.ramirez@outlook.com', '974815236', 'Estudiante', 'Imperial'),
('Ana Guerra Solano', 'ana.guerra@gmail.com', '981526321', 'Profesor', 'San Vicente');

/* Listar los registros de la tabla usuario */
SELECT * FROM usuario;

/* */



/* Creamos la tabla CLIENTE*/
DROP TABLE IF EXISTS Logeo;
CREATE TABLE Logeo 
(
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL
);


INSERT INTO Logeo 
(username, password) 
VALUES
('maylin.jauregui@vallegrande.edu.pe', 'vg2022');

SELECT * FROM Logeo;