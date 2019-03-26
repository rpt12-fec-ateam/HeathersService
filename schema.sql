DROP DATABASE IF EXISTS dh;

CREATE DATABASE dh;

USE dh;

CREATE TABLE ingredients (
    id int NOT NULL AUTO_INCREMENT,
    dishName VARCHAR(50),
    keyIngredients VARCHAR(300),
    ingredients VARCHAR(400),
    nutritionFacts VARCHAR(400),
    photoUrl VARCHAR(200),
    category VARCHAR(50)
);

