-- REMOVE IF YOU DON"T WANT TO DELETE EXISTING DB
DROP DATABASE burger_app_db;

CREATE database burger_app_db;

USE burger_app_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT primary key,
  burger_name VARCHAR(100),
  eaten BOOLEAN DEFAULT false,
);

