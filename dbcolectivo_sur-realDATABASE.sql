
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


/* Creamos la tabla CLIENTE*/
DROP TABLE IF EXISTS Logeo;
CREATE TABLE Logeo 
(
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL
);
