DROP DATABASE IF EXISTS ecommerce_db; 
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE clothing (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    clothing_title VARCHAR(100) NOT NULL
);

CREATE TABLE clothingDescriptions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    clothing_id INT,
    clothingDescription TEXT NOT NULL,
    FOREIGN KEY (clothing_id)
    REFERENCES clothing(id)
    ON DELETE SET NULL
)

