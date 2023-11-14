-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2023 at 12:01 PM
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
(1, '', 'Sawac, Gieberly  Fagwan', 'female', '0000-00-00', 'La Trinindad', 22, 'single', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Gieberly Sawac', 'a@gmail.com', 'Gieberly Fagwan Sawac', 2147483647, 'guardian', 'Bea Caligatan', 2147483647, 'guardian', 'grade_12', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Science in Nutrition and Dietetics', 'Non-board', '14-11-0001', '0000-00-00', 0.00, 0.00, 0.00, NULL),
(2, '', 'Sawac, Gieberly  Fagwan', 'female', '0000-00-00', 'La Trinindad', 22, 'married', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Gieberly Sawac', 'gieberlycious@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'parent', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'hs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Science in Entrepreneurship specialized in Apparel & Fashion Enterprise', 'Non-board', '14-11-0001', '0000-00-00', 0.00, 0.00, 0.00, 99.00),
(3, '', 'Caligtan, Bea Danes', 'female', '0000-00-00', 'La Trinindad', 22, 'single', 'Filipino', 'Filipino', 'Simpa', 2604, 2147483647, 'Bea Caligtan', 'caligtan@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'shs_graduate', 'Mankayan National High School', 'N/A', 'N/A', '36665465768', 'Bachelor of Secondary Education (BSEd) Major in Science', 'Board', '14-11-0001', '0000-00-00', 89.00, 98.00, 79.00, 0.00),
(4, '', 'Caligtan, Bea Danes', 'female', '0000-00-00', 'La Trinindad', 22, 'single', 'Filipino', 'Filipino', 'Simpa', 2604, 2147483647, 'Bea Caligtan', 'caligtan@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'shs_graduate', 'Mankayan National High School', 'N/A', 'N/A', '36665465768', 'Bachelor of Secondary Education (BSEd) Major in Science', 'Board', '14-11-0001', '0000-00-00', 89.00, 98.00, 79.00, 0.00),
(5, '', 'Sawac, Gieberly  Fagwan', 'male', '0000-00-00', 'La Trinindad', 22, 'married', 'Filipino', 'Finlipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Gieberly Sawac', 'caligtana@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'parent', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'shs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Science in Agribusiness (BSAB)', 'Non-board', '14-11-0001', '0000-00-00', 0.00, 0.00, 0.00, 80.00),
(6, '', 'Cruz, Juan Dela ', 'male', '0000-00-00', 'La Trinindad', 27, 'married', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Juan Cruz', 'juan@gamil.com', 'Juan Cruz', 2147483647, 'guardian', 'Juan Cruz', 2147483647, 'parent', 'als_pept_passer', 'Simpa Ampucao Itogon Benguet', 'N/A', 'N/A', '324535465768', 'Bachelor of Secondary Education (BSEd) Major in English', 'Board', '14-11-0001', '0000-00-00', 99.00, 99.00, 99.00, 94.00),
(7, '', 'Cruz, Juan Dela ', 'male', '1995-07-09', 'La Trinindad', 27, 'married', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Juan Cruz', 'juan@gamil.com', 'Juan Cruz', 2147483647, 'guardian', 'Juan Cruz', 2147483647, 'parent', 'als_pept_passer', 'Simpa Ampucao Itogon Benguet', 'N/A', 'N/A', '324535465768', 'Bachelor of Secondary Education (BSEd) Major in English', 'Non-board', '14-11-0001', '2023-11-14', 99.00, 99.00, 99.00, 94.00),
(8, '', 'Sawac, Gieberly Fagwan', 'female', '2000-05-06', 'La Trinindad', 22, 'married', 'Filipino', 'Filipino', 'Simpa', 2604, 2147483647, 'Gieberly Sawac', 'a@gmail.com', 'Gieberly', 2147483647, 'parent', 'Gieberly', 2147483647, 'guardian', 'shs_graduate', 'Simpa Ampucao Itogon Benguet', 'N/A', 'N/A', '324535465768', 'Bachelor of Secondary Education (BSEd) Major in Filipino', 'Board', '14-11-0001', '2023-11-14', 89.00, 89.00, 89.00, 0.00),
(9, 0x75706c6f6164732f363535333437643962623236335f32783220612e706e67, 'Sawac, Gieberly  Fagwan', 'female', '2000-05-11', 'La Trinindad', 22, 'single', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Gieberly Sawac', 'a@gmail.com', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'parent', 'hs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Technology and Livelihood Education Major in Home Economics', 'Board', '14-11-0001', '2023-11-14', 88.00, 99.00, 88.00, 0.00),
(10, 0x75706c6f6164732f363535333530636136623632375f32783220612e706e67, 'Doe, Jane Florence', 'female', '1975-04-22', 'La Trinindad', 47, 'single', 'Filipino', 'Filipino', 'Simpa Ampucao Itogon Benguet', 2604, 2147483647, 'Jane Doe', 'jane@gmail.com', 'Doe,John Florence', 2147483647, 'guardian', 'Sawac, Gieberly Fagwan', 2147483647, 'guardian', 'hs_graduate', 'King\'s College of The Philippines', 'N/A', 'N/A', '324535465768', 'Bachelor of Technology and Livelihood Education Major in Agri-Fisheries', 'Board', '14-11-0001', '2023-11-14', 99.00, 89.00, 99.00, 0.00);

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
(2, 'Gieberly Sawac', 'sawac.gieberly99@gmail.com', '$2y$10$0B0sz/P3.zhMJWW07ovys.DkAcLxA.h286qfJibHZeVjBbnc0Duu2', 'student'),
(3, 'Bea Caligtan', 'bea.caligtan@yahoo.com', '$2y$10$XKd0tc1N6Rmyq1.AtCvea.N5uZvtsU1EAwhCf.bf5PsB5fzB4D6Ou', 'staff'),
(5, 'Admin', 'gieberlycious@gmail.com', '$2y$10$LhPBrEGbj9bo7cpIVKGJBu.h3nvCEWRyV98Ip0zgowsd7tbAaqe2G', 'admin'),
(6, 'Juana Jose', 'gieberly19@gmail.com', '$2y$10$VbQ0aQOLvDfSAxdvxgy17u3u5z5yRvkv5qUn9azASiSA7LDlMCEMu', 'student'),
(8, 'Juanito Jose', 'veiys670@gmail.com', '$2y$10$sn/L/NFoOiSPCBEII2N4E.pNebWZrxDzlEGRJ9sjj3F6Rd73bf472', 'student'),
(9, 'Giely Bons', 'gieberly99@gmail.com', '$2y$10$bKFlnBfUz1FLSdmX5olzxuXXkPpRywLu5ZbNr1b.8ik.5zR1IXAei', 'student'),
(10, 'Gieberly Sawac', 'sawac@gmail.com', '$2y$10$hQpR8TcIV9kYxy.YV470XOKG6DWa.9O/gbFZdTAA2X7r/WF/s.uxC', 'student'),
(11, 'Random Fun', 'a@gmail.com', 'gieberly123', 'student'),
(12, 'Gieberly Sawac', 's@gmail.com', '$2y$10$J8wu.6Lx/JzKtnqsAqqVh.SOka22jmAYKXdWNEudLeCzCjKHNFyQC', 'student'),
(13, 'Jane Doe', 'jane@gmail.com', '$2y$10$kfv514nhDoQWxEMM5/jstuV0OeBDGkN4i7d47aSqNsKxjiA7Ej6iy', 'student');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
