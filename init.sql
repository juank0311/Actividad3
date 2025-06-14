CREATE DATABASE IF NOT EXISTS gestion_financiera;

USE gestion_financiera;

CREATE TABLE transacciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL
);
