DROP DATABASE IF EXISTS dh;

CREATE DATABASE dh;

USE dh;

CREATE TABLE ingredients (
    id int NOT NULL AUTO_INCREMENT,
    dishName TEXT,
    keyIngredients TEXT,
    ingredients TEXT,
    nutritionFacts TEXT,
    photoUrl TEXT,
    category TEXT
);

