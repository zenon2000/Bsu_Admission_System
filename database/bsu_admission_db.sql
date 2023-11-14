-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2023 at 01:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bsu_admission_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admission_data`
--

CREATE TABLE `admission_data` (
  `id` int(11) NOT NULL,
  `id_picture` longblob NOT NULL,
  `applicant_name` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birthdate` date NOT NULL,
  `birthplace` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `civil_status` varchar(20) NOT NULL,
  `citizenship` varchar(50) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `permanent_address` varchar(50) NOT NULL,
  `zip_code` int(4) NOT NULL,
  `phone` int(13) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `email` varchar(25) NOT NULL,
  `contact_person_1` varchar(50) NOT NULL,
  `contact_person_1_mobile` int(13) NOT NULL,
  `relationship_1` varchar(10) NOT NULL,
  `contact_person_2` varchar(50) DEFAULT NULL,
  `contact_person_2_mobile` int(13) DEFAULT NULL,
  `relationship_2` varchar(10) DEFAULT NULL,
  `academic_classification` varchar(50) NOT NULL,
  `high_school_name_address` varchar(50) NOT NULL,
  `als_pept_name_address` varchar(50) NOT NULL,
  `college_name_address` varchar(50) NOT NULL,
  `lrn` varchar(12) NOT NULL,
  `degree_applied` varchar(100) NOT NULL,
  `nature_of_degree` varchar(25) NOT NULL,
  `applicant_number` varchar(20) NOT NULL,
  `application_date` date NOT NULL,
  `english_grade` decimal(5,2) DEFAULT NULL,
  `math_grade` decimal(5,2) DEFAULT NULL,
  `science_grade` decimal(5,2) DEFAULT NULL,
  `gwa_grade` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admission_data`
--

INSERT INTO `admission_data` (`id`, `id_picture`, `applicant_name`, `gender`, `birthdate`, `birthplace`, `age`, `civil_status`, `citizenship`, `nationality`, `permanent_address`, `zip_code`, `phone`, `facebook`, `email`, `contact_person_1`, `contact_person_1_mobile`, `relationship_1`, `contact_person_2`, `contact_person_2_mobile`, `relationship_2`, `academic_classification`, `high_school_name_address`, `als_pept_name_address`, `college_name_address`, `lrn`, `degree_applied`, `nature_of_degree`, `applicant_number`, `application_date`, `english_grade`, `math_grade`, `science_grade`, `gwa_grade`) VALUES
(10, 0x75706c6f6164732f363535333530636136623632375f32783220612e706e67, 'Doe, Jane Florence', 'female', '1975-04-22', 'La Trinindad', 47, 'single', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Jane Doe', 'jane@gmail.com', 'Doe,John Florence', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'hs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Technology and Livelihood Education Major in Agri-Fisheries', 'Board', '14-11-0001', '2023-11-14', 99.00, 89.00, 99.00, 0.00),
(11, 0x75706c6f6164732f363535333562376137613262635f32783220612e706e67, 'Doe, John Florence', 'male', '2000-05-09', 'La Trinindad', 22, 'single', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Bea Caligtan', 'john@gmail.com', 'Gieberly', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'als_pept_passer', 'Simpa Ampucao Itogon Benguet', 'N/A', 'N/A', '324535465768', 'Bachelor in Physical Education', 'Non-board', '14-11-0001', '2023-11-14', 0.00, 0.00, 0.00, 88.00),
(12, 0x75706c6f6164732f363535333630613035323765655f32783220612e706e67, 'Doe, Juan Florence', 'female', '2000-02-02', 'La Trinindad', 22, 'single', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'JuanDoe', 'a@gmail.com', 'Sawac', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'shs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Secondary Education (BSEd) Major in Mathematics', 'Board', '14-11-0001', '2023-11-14', 88.00, 88.00, 99.00, 0.00),
(13, 0x75706c6f6164732f363535333631393764653534395f32783220612e706e67, 'Bona, Giely Juan', 'female', '2000-05-11', 'La Trinindad', 22, 'married', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Giely Bona', 'giely@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'Gieberly', 2147483647, 'guardian', 'hs_graduate', 'Simpa Ampucao Itogon Benguet', 'N/A', 'N/A', '324535465768', 'Bachelor of Science in Information Technology (BSIT)', 'Non-board', '14-11-0001', '2023-11-14', 0.00, 0.00, 0.00, 89.00),
(14, 0x75706c6f6164732f363535333633636536303261635f32783220612e706e67, 'Mouse, Micky Theodore', 'male', '2001-06-08', 'La Trinindad', 21, 'single', 'Filipino', 'Filipino', 'Simpa', 2604, 2147483647, 'Juan Cruz', 'micky@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'hs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Science in Entrepreneurship specialized in Apparel & Fashion Enterprise', 'Non-board', '14-11-0001', '2023-11-14', 0.00, 0.00, 0.00, 89.00),
(15, 0x75706c6f6164732f363535333661356133386635645f32783220612e706e67, 'Cat, Thomas Jasper', 'female', '2000-05-11', 'La Trinidad', 22, 'married', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'gieb', 'thomas@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'transferee', 'Simpa Ampucao Itogon Benguet', 'N/A', 'N/A', '324535465768', 'Bachelor of Arts in Communication', 'Non-board', '14-11-0001', '2023-11-14', 0.00, 0.00, 0.00, 80.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userType` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `userType`) VALUES
(13, 'Jane Doe', 'jane@gmail.com', '$2y$10$kfv514nhDoQWxEMM5/jstuV0OeBDGkN4i7d47aSqNsKxjiA7Ej6iy', 'student'),
(14, 'John Doe', 'john@gmail.com', '$2y$10$f9G2cmLz64SzSL64yh3ENuAjMVvOlV7bzovUwNR9hfntO3.pcVIBa', 'student'),
(15, 'Juan Doe', 'juan@gmail.com', '$2y$10$gNZj3s9gpbvFgIWHw87NoeCgtOWjT/cHkzetT1M2UMK6YULefuqGS', 'student'),
(16, 'Giely Bona', 'giely@gmail.com', '$2y$10$xaUrvLelgEfrxzsUgF80GuFDpARPms6rkYMmHdNeMHptl5EKZvyzW', 'student'),
(17, 'Micky Mouse', 'micky@gmail.com', '$2y$10$C1eA4AGiTFSDjNvB5BuGYeuKC1FqC5EEGLZnocKn.H81yE3zMGDWO', 'student'),
(18, 'Thomas Cat', 'thomas@gmail.com', '$2y$10$pQdeyz15PCsi211U/XSpzeMOmAktIdo2z3MGFoeZ/ymlCvKMoBeDm', 'student'),
(19, 'Gieberly Sawac', 'gieberlycious@gmail.com', '$2y$10$Bs05CM.xJVukJxeVTyujCeztfDihfFm/LWIXFn9R1KkuMLQkFYv7y', 'admin'),
(20, 'Jeshen Sap-ay Licangen', 'jeshen@gmail.com', '$2y$10$HH/lteOaVezT6/TBwGwCeOjJfj0F22AW3SHHHvSDc.easeEImG/jK', 'staff'),
(21, 'Arjie Puylong', 'arjie@gmail.com', '$2y$10$m5EPd4jI/a91NFegmOeFSuhGgv.RLeSH9tyCOhRzuCghiDb8K/ZQG', 'staff'),
(22, 'Jessa Itsu', 'jessa@gmail.com', '$2y$10$oCpPSkYCW9L0bqASh6zfOuJOUGDdXTfcJB6jCTnVWFhB1cv.Y8Bre', 'staff'),
(23, 'Jeffrey De la Torre', 'jeffrey@gmail.com', '$2y$10$Z4abFMgOu8DRKamYddg21eToWUSDTLOs1.0UUCQhFb35EnwiL0Pja', 'staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admission_data`
--
ALTER TABLE `admission_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admission_data`
--
ALTER TABLE `admission_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
