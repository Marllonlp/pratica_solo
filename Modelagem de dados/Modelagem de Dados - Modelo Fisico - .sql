/* Modelagem de Dados - Modelo Lógico - : */

CREATE TABLE Usuario (
    ID do usuário INT PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100),
    Senha VARCHAR(100)
);

CREATE TABLE Destinos (
    ID do destino INT PRIMARY KEY,
    Nome do destino VARCHAR(100),
    Descrição TEXT,
    Preço DECIMAL(10,2)
);

CREATE TABLE Promoções (
    ID da promoção INT PRIMARY KEY,
    ID do destino INT,
    Descrição da promoção TEXT,
    Preço com desconto  DECIMAL(10,2)
);

CREATE TABLE Contatos (
     ID do contato INT PRIMARY KEY,
     ID do usuário  INT,
    Mensagem TEXT
);

CREATE TABLE Reservas (
    ID da reserva  INT PRIMARY KEY,
    ID do usuário INT,
    ID do destino INT,
    Data da reserva DATE
);
 
ALTER TABLE Promoções ADD CONSTRAINT FK_Promoções_2
    FOREIGN KEY (ID do destino???)
    REFERENCES ??? (???);
 
ALTER TABLE Contatos ADD CONSTRAINT FK_Contatos_2
    FOREIGN KEY ( ID do usuário ???)
    REFERENCES ??? (???);
 
ALTER TABLE Reservas ADD CONSTRAINT FK_Reservas_2
    FOREIGN KEY (ID do usuário???, ID do destino???)
    REFERENCES ??? (???);