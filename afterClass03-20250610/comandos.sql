-- Active: 1735524667802@@localhost@3306
CREATE DATABASE IF NOT EXISTS pruebasDB
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE productos(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    title VARCHAR(255),
    descrip VARCHAR(255),
    price FLOAT(15,2),
    stock INTEGER(15)
) COMMENT '';


insert into 
  productos (
    title, 
    descrip, 
    price, 
    stock
  )
values
  (
    "Pantalon", 
    "Pantalon gris", 
    180, 
    3
  );


  select * from productos;