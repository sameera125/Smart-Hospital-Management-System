-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: hospitaldb
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `appointment_id` bigint NOT NULL AUTO_INCREMENT,
  `appointment_date` date DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`appointment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultation`
--

DROP TABLE IF EXISTS `consultation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultation` (
  `consultation_id` bigint NOT NULL AUTO_INCREMENT,
  `consultation_date` date DEFAULT NULL,
  `consultation_fee` double DEFAULT NULL,
  `consultation_type` varchar(255) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `meeting_link` varchar(255) DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `symptoms` varchar(255) DEFAULT NULL,
  `patient_mobile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`consultation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultation`
--

LOCK TABLES `consultation` WRITE;
/*!40000 ALTER TABLE `consultation` DISABLE KEYS */;
INSERT INTO `consultation` VALUES (1,'2026-06-01',500,'Video',1,'https://meet.google.com/smart-care-demo',1,'Pending','Approved','Severe heart pain from past 2 days with slight head ache','9123456780'),(2,'2026-06-02',500,'Chat',10,'https://meet.google.com/smart-care-demo',1,'Pending','Approved','Toothache from 4 days','9123456789'),(3,'2026-06-10',500,'Phone',6,'https://meet.google.com/smart-care-demo',1,'Pending','Approved','head ache','9123456781'),(4,'2026-06-20',500,'Phone',5,'https://meet.google.com/smart-care-demo',1,'Pending','Approved','vomitings','9123456781'),(5,'2026-06-01',500,'Phone',10,'https://meet.google.com/smart-care-demo',4,'Pending','Approved','Vomitings from morning onwards severly','9876543212'),(6,'2026-06-12',500,'Chat',3,'https://meet.google.com/smart-care-demo',1,'Pending','Approved','Backpain from yesterday','9123456780'),(7,'2026-06-03',500,'Chat',1,'https://meet.google.com/smart-care-demo',6,'Pending','Approved','Heart attack ','8331007855');
/*!40000 ALTER TABLE `consultation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_login`
--

DROP TABLE IF EXISTS `doctor_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_login` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `doctor_id` bigint DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_login`
--

LOCK TABLES `doctor_login` WRITE;
/*!40000 ALTER TABLE `doctor_login` DISABLE KEYS */;
INSERT INTO `doctor_login` VALUES (1,1,'ramesh@gmail.com','123456'),(2,2,'kavya@gmail.com','kavya123'),(3,3,'sana@gmail.com','123456'),(4,4,'rajesh@gmail.com','123456'),(5,5,'suresh@gmail.com','123456'),(6,6,'anita@gmail.com','123456'),(7,7,'farhan@gmail.com','123456'),(8,8,'pooja@gmail.com','123456'),(9,9,'kiran@gmail.com','123456'),(10,10,'neha@gmail.com','123456');
/*!40000 ALTER TABLE `doctor_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `doctor_id` bigint NOT NULL AUTO_INCREMENT,
  `doctor_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'Dr. Ramesh Kumar','ramesh@gmail.com',10,'9123456780','Cardiologist'),(2,'Dr. Kavya Reddy','kavya@gmail.com',6,'9123456781','Dermatologist'),(3,'Dr. Arjun Rao','arjun@gmail.com',12,'9123456782','Neurologist'),(4,'Dr. Meena Sharma','meena@gmail.com',8,'9123456783','Pediatrician'),(5,'Dr. Suresh Babu','suresh@gmail.com',15,'9123456784','Orthopedic'),(6,'Dr. Anita Nair','anita@gmail.com',9,'9123456785','General Physician'),(7,'Dr. Farhan Ali','farhan@gmail.com',7,'9123456786','ENT Specialist'),(8,'Dr. Pooja Menon','pooja@gmail.com',11,'9123456787','Gynecologist'),(9,'Dr. Kiran Patel','kiran@gmail.com',5,'9123456788','Psychiatrist'),(10,'Dr. Neha Gupta','neha@gmail.com',4,'9123456789','Dentist');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine_order`
--

DROP TABLE IF EXISTS `medicine_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_order` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `delivery_address` varchar(255) DEFAULT NULL,
  `medicine_name` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  `prescription_id` bigint DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine_order`
--

LOCK TABLES `medicine_order` WRITE;
/*!40000 ALTER TABLE `medicine_order` DISABLE KEYS */;
INSERT INTO `medicine_order` VALUES (1,NULL,'citrizen','Delivered',1,3,1,120,'2026-06-01',NULL),(2,NULL,'Glizidium','Delivered',1,1,1,120,'2026-06-01',NULL),(3,NULL,'Glizidium','Delivered',1,1,1,120,'2026-06-01',NULL),(4,NULL,'Dolo','Delivered',1,2,1,120,'2026-06-01',NULL),(5,NULL,'Glizidium','Delivered',1,1,1,120,'2026-06-01',NULL),(6,NULL,'Dolo','Delivered',1,2,1,120,'2026-06-01',NULL),(7,NULL,'Glizidium','Delivered',1,1,1,120,'2026-06-01',NULL),(8,NULL,'ipca mmf','Delivered',6,4,1,120,'2026-06-01',NULL);
/*!40000 ALTER TABLE `medicine_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `patient_id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `UKa370hmxgv0l5c9panryr1ji7d` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Hyderabad',24,'aarav@gmail.com','Male','9876543210','Aarav Sharma','123456'),(2,'Warangal',28,'priya.patient@gmail.com','Female','9876543211','Priya Reddy','123456'),(3,'Hanamkonda',22,'sameera.patient@gmail.com','Female','9876543212','Sameera Shaik','123456'),(4,'Karimnagar',31,'rahul@gmail.com','Male','9876543213','Rahul Verma','123456'),(5,'Vijayawada',26,'kavya.patient@gmail.com','Female','9876543214','Kavya Nair','123456'),(6,'Nizamabad',35,'imran@gmail.com','Male','9876543215','Imran Khan','123456'),(7,'Khammam',29,'sneha@gmail.com','Female','9876543216','Sneha Rao','123456'),(8,'Guntur',40,'anil@gmail.com','Male','9876543217','Anil Kumar','123456'),(9,'Vizag',23,'meghana@gmail.com','Female','9876543218','Meghana Das','123456'),(10,'Tirupati',33,'vikram@gmail.com','Male','9876543219','Vikram Singh','123456');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` bigint NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `consultation_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,500,1,1,'UPI','Success','TXN1780308185374'),(2,500,2,1,'UPI','Success','TXN1780309485251'),(3,500,3,1,'UPI','Success','TXN1780310899700'),(4,500,4,1,'Card','Success','TXN1780313850654'),(5,500,4,1,'Net Banking','Success','TXN1780313857198'),(6,500,4,1,'UPI','Success','TXN1780313861950'),(7,500,4,1,'UPI','Success','TXN1780313867830'),(8,500,4,1,'UPI','Success','TXN1780313876009'),(9,500,4,1,'UPI','Success','TXN1780313994954'),(10,500,4,1,'UPI','Success','TXN1780314081325'),(11,500,5,4,'Card','Success','TXN1780315007555'),(12,500,6,1,'UPI','Success','TXN1780321128090'),(13,500,7,6,'Net Banking','Success','TXN1780322822563');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription` (
  `prescription_id` bigint NOT NULL AUTO_INCREMENT,
  `consultation_id` bigint DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `dosage` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `instructions` varchar(255) DEFAULT NULL,
  `medicine_name` varchar(255) DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  PRIMARY KEY (`prescription_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription`
--

LOCK TABLES `prescription` WRITE;
/*!40000 ALTER TABLE `prescription` DISABLE KEYS */;
INSERT INTO `prescription` VALUES (1,1,1,'250mg','4 days','Eat healthy food ','Glizidium',1),(2,3,6,'100mg','4 days','Dont use phone ','Dolo',1),(3,2,10,'100mg','5 days','drink water daily','citrizen',1),(4,7,1,'250mg','5 days','Take this immediately and drink water','ipca mmf',6);
/*!40000 ALTER TABLE `prescription` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-01 19:51:39
