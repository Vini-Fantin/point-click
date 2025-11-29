-- MySQL Workbench Forward Engineering - Banco do zero com pelo menos 3 items por place e 10 jogadores "-----" com score 0

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pointclick_bd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pointclick_bd`;
USE `pointclick_bd`;

-- -----------------------------------------------------
-- Table `rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) 
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `places` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_places_rooms_idx` (`room_id` ASC),
  CONSTRAINT `fk_places_rooms`
    FOREIGN KEY (`room_id`)
    REFERENCES `rooms` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  `score` INT NOT NULL,
  `place_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_items_places_idx` (`place_id` ASC),
  CONSTRAINT `fk_items_places`
    FOREIGN KEY (`place_id`)
    REFERENCES `places` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `leaderboard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `leaderboard` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NOT NULL,
  `score` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Inserção de dados
-- -----------------------------------------------------

-- Rooms
INSERT INTO rooms (name) VALUES
('Sala de Estar'),
('Banheiro'),
('Quarto');

-- Places
INSERT INTO places (name, room_id) VALUES
-- Sala de Estar
('Próximo à Porta', 1),
('Centro do Cômodo', 1),
('Em cima de um Móvel', 1),
('Diversos', 1),
('Teto', 1),
-- Banheiro
('Próximo à Porta', 2),
('Centro do Cômodo', 2),
('Em cima de um Móvel', 2),
('Diversos', 2),
('Teto', 2),
-- Quarto
('Próximo à Cama', 3),
('Centro do Cômodo', 3),
('Em cima da Cômoda', 3),
('Perto da Janela', 3),
('Teto', 3);

-- Items (sem "Nada" por enquanto)
INSERT INTO items (name, score, place_id) VALUES
-- Sala de Estar
('Sapato velho frouxo', 1, 1),
('Tapete antiderrapante', 5, 1),
('Chinelo de borracha novo', 5, 1),

('Animal dormindo', 2, 2),
('Andador dobrável', 5, 2),
('Cadeira de apoio firme', 5, 2),

('Copo de vidro', 3, 3),
('Abajur com botão acessível', 5, 3),
('Controle remoto', 4, 3),

('Tapete pequeno', 2, 4),
('Cobertor caído', 1, 4),
('Mesa com quina protegida', 5, 4),

('Fiação solta no teto', 1, 5),
('Lâmpada de LED nova', 5, 5),
('Ventilador de teto antigo', 2, 5),

-- Banheiro
('Balde de limpeza', 2, 6),
('Tapete de borracha antiderrapante', 5, 6),
('Chinelo escorregadio', 1, 6),

('Corrimão', 3, 7),
('Barras de apoio', 5, 7),

('Toalha caída no chão', 1, 8),
('Piso molhado', 1, 8),

('Remédios abertos', 2, 9),
('Copo de vidro', 1, 9),

('Lâmpada queimada', 1, 10),
('Lâmpada de LED nova', 5, 10),

-- Quarto
('Tapete solto', 1, 11),
('Chinelo firme', 5, 11),
('Roupas espalhadas', 1, 11),

('Copo de água', 2, 12),
('Abajur seguro na cômoda', 5, 12),

('Puff', 2, 13),
('Cadeira confortável', 4, 13),

('Fiação antiga', 1, 14),
('Ventilador de teto antigo', 2, 14),
('Lâmpada de LED nova', 5, 14);

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

-- -----------------------------------------------------
-- Garantir que todos os places tenham item "Nada" com score 3
-- -----------------------------------------------------

DELETE FROM items WHERE name = 'Nada';

INSERT INTO items (name, score, place_id)
SELECT 'Nenhuma das opções', 3, id FROM places;

-- -----------------------------------------------------
-- Restaura configurações
-- -----------------------------------------------------
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
