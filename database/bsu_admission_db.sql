-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2023 at 06:14 AM
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
  `nature_of_degree` varchar(50) NOT NULL,
  `program` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `gwa` decimal(4,2) NOT NULL,
  `english_grade` decimal(4,2) DEFAULT NULL,
  `math_grade` decimal(4,2) DEFAULT NULL,
  `science_grade` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userType` varchar(10) NOT NULL,
  `verification_token` varchar(100) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `userType`, `verification_token`, `is_verified`) VALUES
(2, 'Gieberly Sawac', 'sawac.gieberly99@gmail.com', '$2y$10$0B0sz/P3.zhMJWW07ovys.DkAcLxA.h286qfJibHZeVjBbnc0Duu2', 'student', NULL, 0),
(3, 'Bea Caligtan', 'bea.caligtan@yahoo.com', '$2y$10$XKd0tc1N6Rmyq1.AtCvea.N5uZvtsU1EAwhCf.bf5PsB5fzB4D6Ou', 'staff', NULL, 0),
(5, 'Admin', 'gieberlycious@gmail.com', '$2y$10$LhPBrEGbj9bo7cpIVKGJBu.h3nvCEWRyV98Ip0zgowsd7tbAaqe2G', 'admin', NULL, 0),
(6, 'Juana Jose', 'gieberly19@gmail.com', '$2y$10$VbQ0aQOLvDfSAxdvxgy17u3u5z5yRvkv5qUn9azASiSA7LDlMCEMu', 'student', NULL, 0),
(8, 'Juanito Jose', 'veiys670@gmail.com', '$2y$10$sn/L/NFoOiSPCBEII2N4E.pNebWZrxDzlEGRJ9sjj3F6Rd73bf472', 'student', 'b3e41d8333882b19f7403184f97326d1409f97a911280ea74d7c9342357f8989', 0),
(9, 'Giely Bons', 'gieberly99@gmail.com', '$2y$10$bKFlnBfUz1FLSdmX5olzxuXXkPpRywLu5ZbNr1b.8ik.5zR1IXAei', 'student', NULL, 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
