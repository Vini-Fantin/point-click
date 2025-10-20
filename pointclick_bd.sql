-- MySQL Workbench Forward Engineering - Compatível com MySQL 5.x

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES';

-- -----------------------------------------------------
-- Schema pointclick_bd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pointclick_bd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pointclick_bd`;

-- -----------------------------------------------------
-- Table `rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -----------------------------------------------------
-- Table `places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `places` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  INDEX `fk_places_rooms_idx` (`room_id`),
  CONSTRAINT `fk_places_rooms`
    FOREIGN KEY (`room_id`)
    REFERENCES `rooms` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -----------------------------------------------------
-- Table `items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  `score` INT NOT NULL,
  `place_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`),
  INDEX `fk_items_places_idx` (`place_id`),
  CONSTRAINT `fk_items_places`
    FOREIGN KEY (`place_id`)
    REFERENCES `places` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -----------------------------------------------------
-- Table `leaderboard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `leaderboard` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  `score` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -----------------------------------------------------
-- Inserção de dados
-- -----------------------------------------------------

-- Rooms
INSERT INTO rooms (name) VALUES
('Sala de Estar'),
('Banheiro'),
('Cozinha');

-- Places
INSERT INTO places (name, room_id) VALUES
('Próximo à Porta', 1),
('Centro do Cômodo', 1),
('Em cima de um Móvel', 1),
('Diversos', 1),
('Teto', 1),
('Próximo à Porta', 2),
('Centro do Cômodo', 2),
('Em cima de um Móvel', 2),
('Diversos', 2),
('Teto', 2),
('Próximo à Porta', 3),
('Centro do Cômodo', 3),
('Em cima de um Móvel', 3),
('Diversos', 3),
('Teto', 3);

-- Items
INSERT INTO items (name, score, place_id) VALUES
('Tapete antiderrapante', 5, 1),
('Sapato velho frouxo', 1, 1),
('Chinelo de borracha novo', 5, 1),
('Andador dobrável', 5, 2),
('Animal dormindo', 2, 2),
('Cadeira de apoio firme', 5, 2),
('Abajur com botão acessível', 5, 3),
('Controle remoto', 4, 3),
('Copo de vidro', 2, 3),
('Tapete pequeno', 2, 4),
('Cobertor caído', 2, 4),
('Mesa com quina protegida', 5, 4),
('Lâmpada de LED nova', 5, 5),
('Fiação solta no teto', 1, 5),
('Ventilador de teto antigo', 2, 5),
('Tapete de borracha antiderrapante', 5, 6),
('Chinelo escorregadio', 1, 6),
('Balde de limpeza', 2, 6),
('Corrimão', 3, 7),
('Barras de apoio', 5, 7),
('Toalha caída no chão', 2, 8),
('Piso molhado', 3, 8),
('Remédios abertos', 2, 9),
('Copo de vidro', 1, 9),
('Lâmpada queimada', 1, 10),
('Lâmpada de LED nova', 5, 10),
('Tapete fino', 5, 11),
('Pano de chão molhado', 1, 11),
('Chinelo de borracha', 5, 11),
('Banco com apoio firme', 5, 12),
('Armário baixo acessível', 5, 12),
('Prato de vidro', 1, 13),
('Nada', 5, 13),
('Panela grande', 2, 13),
('Lâmpada de LED nova', 5, 15),
('Fiação antiga', 2, 15);

-- Leaderboard
INSERT INTO leaderboard (name, score) VALUES
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0),
('-----', 0);

-- Resetando os modos
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
