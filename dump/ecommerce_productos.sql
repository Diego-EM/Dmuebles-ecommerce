-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ecommerce
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(150) NOT NULL,
  `id_proveedor` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` double NOT NULL,
  `oferta` double DEFAULT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_57` (`id_categoria`),
  KEY `FK_64` (`id_proveedor`),
  CONSTRAINT `FK_55` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  CONSTRAINT `FK_62` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Maceta de madera cuadrada',3,5,'AF-45','Bonita maceta de madera con patas metalicas de forma cuadrada. Ideal para darle un toque de vida a tu hogar.',499,NULL,100),(2,'Maceta de madera rustica',4,5,'SLS-89','Maceta de madera de caoba con acabado rustico. Dale un toque más personalizado a tu jardín.',399,0.2,256),(3,'Maceta triangular con base metálica',3,5,'AF-78','Maceta de madera de pino con forma triangular, incluye base de color blanco. Excelente para darle un toque más personal a tu escritorio o estación de trabajo',599,0.5,45),(4,'Maceta gris con base de madera natural',4,5,'SLS-70','Maceta plástica color gris con base de madera al natural apta para interiores y exteriores. Perfecta para lucirla con las visitas.',699,0.7,540),(5,'Maceta tronco natural',4,5,'SLS-60','Maceta con base de tronco natural y acabado rustico, ideal para exteriores.',1099,0.25,45),(6,'Lampara de techo triangular',3,5,'LAMP-10','Lampara de techo perfecta para brindar iluminación y decorar el hogar. Fabricado con madera natural',699,0.1,200),(7,'Lampara LED Baobab',3,5,'LAMP-20','Lampara de piso de color caoba con acabado exótico, cuenta con iluminación LED de bajo consumo, perfecta para interiores y decoración del hogar.',1399,0.2,90),(8,'Sala esquinera gris moderna',6,1,'SAL-451','Sala esquinera de color gris oscuro, con acabado de terciopelo. Incluye 4 cojines de decoración. Estilo contemporáneo ideal para dar un look minimalista a tu hogar',19999,0.15,5),(9,'Sala esquinera contemporánea azul rey',6,1,'SAL-512','Sala esquinera de color azul rey con acabado de terciopelo. Incluye 2 bancos acojinados. Perfecta para centros de entretenimiento.',22999,0.25,6),(10,'Sala gris moderna',6,1,'SAL-202','Sala moderna tapizado en color gris claro, incluye 3 piezas siendo el indiviual y 2 love-seat.',16999,NULL,7),(11,'Sala Martínez Café',5,1,'451A21','Sala tapizada con vinilcuero color café, incluye 3 piezas siendo sillón de 1, 2 y 3 personas',20999,NULL,4),(12,'Sala esquinera Marqués Reyes',5,1,'45A215','Sala esquinera Marqués Reyes con tapizado color gris de estilo contemporáneo, de 2 piezas siendo el taburete y sillón principal.',20999,0.1,2),(13,'Sala esquinera Confortable negra',6,1,'SAL-788','Sala esquinera de estilo moderno con patas metalicas y tapizado de vinil, cuenta con reposacabezas. Muy cómoda agradable para el descanso',18599,NULL,6),(14,'Sala esquinera San Marcos',6,1,'SAL-123','Sala esquinera de 3 piezas con tapizado de vinilcuero café oscuro brillante. Cuenta con taburete y 2 piezas más, junto con 4 cojines decorativos. Excelente para lucirlo en el hogar.',25399,0.1,3),(15,'Sala Artesanal de madera natural',1,1,'45278','Sala esquinera artesanal completamente fabricada en madera de pino natural con acabado semimate color café, incluye 3 piezas siendo dos sillones para 2 personas y una mesa esquinera.',16999,NULL,3),(16,'Comedor Marquesina caoba',1,2,'COM-87','Comedor de madera de pino con acabado semimate color caoba, cuenta con 6 sillas de asiento tapizado.',18999,NULL,5),(17,'Comedor Morat con 6 sillas',5,2,'452C54','Comedor con mesa de madera de pino natural con acabado semimate con 6 sillas tapizadas de vinil color chocolate con estructura de madera de pino',13999,0.1,3),(18,'Comedor Elixir Plata',1,2,'COM-78','Comedor de 6 sillas de pino natural con acabado brillante color plata, las sillas son tapizadas de color gris claro con patas oscuras.',15699,0.1,2),(19,'Comedor Nogal de 6 sillas',1,2,'COM-70','Comedor de 6 sillas con acabado semimate color nogal, completamente fabricado en madera de cedro con sillas de asiento tapizado en vinil.',13299,NULL,4),(20,'Comedor Nogal Mini con 4 sillas',1,2,'COM-71','Comedor de 4 sillas con acabado semimate color nogal, completamente fabricado en madera de cedro con sillas de asiento tapizado en vinil.',10299,NULL,3),(21,'Comedor Sanchéz Nogal',1,2,'COM-75','Comedor de 6 sillas con acabado semimate color nogal oscuro, completamente fabricado en madera de pino con sillas de asiento tapizado.',11399,NULL,1),(22,'Comedor Bartolo',5,2,'A54S2','Comedor de 4 sillas de estructura tubular, sillas tapizadas en color beige.',7299,NULL,1),(23,'Comedor Luxury Gris',5,2,'AD54S','Comedor de lujo con 6 sillas tapizadas color gris claro de madera de pino natural',20699,0.1,3),(24,'Comedor Primavera',5,2,'C54A5','Comedor de 6 sillas color nogal de estilo contemporáneo, sillas tapizadas de color mostaza.',11599,0.2,3),(25,'Comedor Durazno',5,2,'SA45S','Comedor de madera de pino color chocolate de estilo contemporáneo, incluye 4 sillas y 2 taburetes tapizados en tela color durazno.',15399,0.25,5);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-27 22:08:24
