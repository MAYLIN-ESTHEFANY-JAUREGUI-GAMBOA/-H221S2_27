-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-11-04 06:26:03.605

-- tables
-- Table: REGISTRO_EVENTOS
CREATE TABLE REGISTRO_EVENTOS (
    ID_REG_EVE char(5)  NOT NULL,
    NOM_REG_EVE varchar(70)  NOT NULL,
    APE_REG_EVE varchar(70)  NOT NULL,
    COR_REG_EVE varchar(80)  NOT NULL,
    CEL_REG_EVE char(9)  NOT NULL,
    PRO_REG_EVE varchar(70)  NOT NULL,
    LDP_REG_EVE varchar(90)  NOT NULL,
    CONSTRAINT REGISTRO_EVENTOS_pk PRIMARY KEY (ID_REG_EVE)
);

-- End of file.

