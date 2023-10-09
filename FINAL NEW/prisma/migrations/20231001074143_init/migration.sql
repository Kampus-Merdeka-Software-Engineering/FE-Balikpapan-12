-- CreateTable
CREATE TABLE `Class` (
    `id_kelas` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelas` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(20) NOT NULL,
    `link_youtube` VARCHAR(300) NOT NULL,
    PRIMARY KEY (`id_kelas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `contact` (
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `pesan` TEXT NOT NULL,
    PRIMARY KEY (`nama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO class (nama_kelas, kategori, link_youtube) VALUES
('Belajar Basic Figma', 'front-end', ''),
('Belajar Basic HTML', 'front-end', ''),
('Belajar Basic CSS', 'front-end', ''),
('Belajar CSS Layout', 'front-end', ''),
('Belajar Basic Bootstrap', 'front-end', ''),
('Belajar Git & GitHub', 'back-end', ''),
('Belajar Basic JavaScript', 'back-end', ''),
('Belajar Rest API', 'back-end', ''),
('Belajar Node Js', 'back-end', ''),
('Belajar PostgreSQL', 'back-end', '');

