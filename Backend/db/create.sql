USE p02;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE notices (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    content LONGTEXT NOT NULL,   -- Use MEDIUMTEXT for larger content requirements
    author VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL
);

