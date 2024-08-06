USE p02;

INSERT INTO usuario (nombre, email, contrasena) VALUES  
('Cristian Morales', 'cristian.morales@example.com', '1234'),
('Jesus Chavez', 'jesus.chavez@example.com', '5678'),
('Danna Sanchez', 'danna.sanchez@example.com', '9012');

INSERT INTO autor (nombre, biografia, fecha_registro) VALUES 
('Mario López', 'Mario es un periodista con especialización en reportajes sobre medio ambiente y cambio climático.', '2010-11-05'),
('Claudia Martínez', 'Claudia es una periodista destacada en el ámbito de la salud y la medicina, con más de 15 años de experiencia.', '2006-06-12'),
('Fernando Gutiérrez', 'Fernando es un autor y periodista que cubre temas de política y relaciones internacionales.', '2015-09-30'),
('Isabel Pérez', 'Isabel es una periodista enfocada en temas culturales y sociales, con múltiples premios por sus reportajes.', '2012-02-18');


INSERT INTO noticia (titulo, contenido, resumen, fecha_publicacion, url, id_autor) VALUES 
('AVANZA CONSTRUCCIÓN DEL NUEVO PARQUE METROPOLITANO EN AGUASCALIENTES','El gobierno municipal de Aguascalientes anunció que la construcción del nuevo Parque Metropolitano ha alcanzado un avance del 60%. El proyecto, que se desarrolla en la zona norte de la ciudad, incluirá áreas verdes, juegos infantiles, canchas deportivas y un lago artificial. La alcaldesa Leo Montañez destacó la importancia de este espacio para fomentar la convivencia familiar y el esparcimiento de los ciudadanos.','El gobierno municipal de Aguascalientes anunció que la construcción del nuevo Parque Metropolitano ha alcanzado un avance del 60%.','2024-07-25','https://noticiasags.com/nuevo-parque-metropolitano','1'),

('INAUGURAN NUEVO CENTRO DE SALUD EN EL BARRIO DE LA PURÍSIMA','Con el objetivo de mejorar la atención médica en Aguascalientes, el presidente municipal Leo Montañez inauguró un nuevo centro de salud en el barrio de La Purísima. El centro cuenta con modernas instalaciones y equipos médicos de última generación. Durante el evento, Montañez resaltó la importancia de acercar los servicios de salud a la comunidad y mejorar la calidad de vida de los habitantes.','El presidente municipal Leo Montañez inauguró un nuevo centro de salud en el barrio de La Purísima.','2024-07-26','https://saludags.com/centro-de-salud-la-purisima','2'),

('INICIA PROGRAMA DE REFORESTACIÓN EN ZONAS URBANAS DE AGUASCALIENTES','El Ayuntamiento de Aguascalientes, encabezado por Leo Montañez, dio inicio a un ambicioso programa de reforestación en diversas zonas urbanas de la ciudad. El objetivo es plantar más de 10,000 árboles en parques, avenidas y espacios públicos para combatir el cambio climático y mejorar la calidad del aire. En la primera fase del programa, se plantaron 1,500 árboles en el Parque México, con la participación de voluntarios y estudiantes de diferentes escuelas.','El Ayuntamiento de Aguascalientes dio inicio a un ambicioso programa de reforestación en diversas zonas urbanas de la ciudad.','2024-07-27','https://ambientalags.com/reforestacion-urbana','3'),

('REMODELACIÓN DE MERCADO MUNICIPAL IMPULSA EL COMERCIO LOCAL','El presidente municipal de Aguascalientes, Leo Montañez, supervisó las obras de remodelación del Mercado Municipal, las cuales tienen como objetivo modernizar las instalaciones y mejorar las condiciones de trabajo para los comerciantes. Las obras incluyen la renovación de los puestos, la instalación de un nuevo sistema de ventilación y la mejora de los accesos. Montañez destacó que esta iniciativa busca revitalizar el comercio local y ofrecer a los ciudadanos un espacio más cómodo y seguro para sus compras.','El presidente municipal de Aguascalientes supervisó las obras de remodelación del Mercado Municipal, que tienen como objetivo modernizar las instalaciones y mejorar las condiciones de trabajo para los comerciantes.','2024-07-28','https://economiaags.com/remodelacion-mercado-municipal','4');


-- Insertar las categorías
INSERT INTO categoria (nombre) VALUES 
('Deportes'),
('Entretenimiento'),
('Política'),
('Clima');

-- Asumiendo que ya tienes algunos usuarios y noticias insertadas en tus tablas,
-- y que conoces sus IDs.

-- Insertar algunos comentarios usando los nombres de las personas de la tabla usuario
INSERT INTO comentario (contenido, fecha_comentario, id_noticia, id_usuario) VALUES 
('Este es un comentario sobre la última noticia de deportes. Muy interesante.', '2024-08-01', 1, 1),
('Me parece que la noticia de entretenimiento es bastante relevante. Buen trabajo.', '2024-08-02', 2, 2),
('La política actual está llena de sorpresas. Esta noticia lo refleja muy bien.', '2024-08-03', 3, 3),
('El cambio climático es un tema crucial. Esta noticia aporta mucho a la discusión.', '2024-08-04', 4, 4);

-- Nota: Asegúrate de ajustar los valores de id_noticia y id_usuario según los IDs reales de tus registros.


