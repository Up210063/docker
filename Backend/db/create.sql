
USE p02;
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(100) NOT NULL
);
CREATE TABLE autor (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    biografia TEXT,
    fecha_registro DATE NOT NULL
);
CREATE TABLE noticia (
    id_noticia INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    resumen TEXT,
    fecha_publicacion DATE NOT NULL,
    url VARCHAR(255),
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor)
);
-- Tabla de categorías
CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de comentarios
CREATE TABLE comentario (
    id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    contenido TEXT NOT NULL,
    fecha_comentario DATE NOT NULL,
    id_noticia INT,
    id_usuario INT,
    FOREIGN KEY (id_noticia) REFERENCES noticia(id_noticia),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabla intermedia para la relación muchos a muchos entre noticias y categorías
CREATE TABLE noticia_categoria (
    id_noticia INT,
    id_categoria INT,
    PRIMARY KEY (id_noticia, id_categoria),
    FOREIGN KEY (id_noticia) REFERENCES noticia(id_noticia),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);
