CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    sku VARCHAR(100) UNIQUE,
    id_categoria INT 
);

CREATE TABLE productos(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    title VARCHAR(255),
    descrip VARCHAR(255),
    price FLOAT(15,2),
    stock INTEGER(15)
) COMMENT '';


CREATE TABLE productos2 (
    id INT  PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    sku VARCHAR(100) UNIQUE,
    id_categoria INT, -- Opcional: Clave foránea a una tabla de categorías
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    -- Restricción de clave foránea (descomentar si usas id_categoria)
    -- FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

CREATE TABLE productos3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    sku VARCHAR(100) UNIQUE,
    id_categoria INT, -- Opcional: Clave foránea a una tabla de categorías
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    -- Restricción de clave foránea (descomentar si usas id_categoria)
    -- FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

INSERT INTO productos3 (nombre, descripcion, precio, stock, sku, id_categoria, activo)
VALUES
    ('Smartphone X', 'Potente smartphone con cámara de 108MP y pantalla AMOLED.', 799.99, 150, 'SMARTX001', 1, TRUE),
    ('Auriculares Bluetooth Z', 'Auriculares inalámbricos con cancelación de ruido y batería de larga duración.', 129.50, 200, 'AUDZ002', 2, TRUE),
    ('Teclado Mecánico RGB', 'Teclado para juegos con retroiluminación RGB personalizable y switches táctiles.', 85.00, 75, 'TECMECRGB03', NULL, TRUE);