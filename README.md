# probabilidad_nodejs
## Herramientas necesarias para correr el proyecto

- [NodeJs](https://nodejs.org/en/download).
- [XAMMP](https://www.apachefriends.org/es/index.html).
- Se deben de instalar las herramientas y luego descargar el proyecto.
- Ubíquese en la raíz del proyecto.
- En la raíz dentro de un terminal, digite: nmp update
- En la raíz dentro de un terminal, digite: node app.js

## Creacion de la Base de datos

Instale el programa XAMPP y dentro del control panel active (Start): Apache y MySQL respectivamente

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/3aa3413d-884e-48f3-aa30-c213fa736f4c)

Una vez iniciados, de click al Admin de Mysql

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/42389c88-6f07-449a-9b83-1077eb8a08a1)

O puede ir a un navegador he ingresar al localhost y luego dar click en phpmyadmin

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/eab5f997-f970-4af8-8ecf-a986f373f089)

Dentro de phpmyadmin cree una base de datos de nombre databd

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/5d2ced2d-d399-4e31-aa4c-f0065c924a15)

en la base de datos databd ingrese a SQL y copie todo el codigo que esta en el archibo BD.sql, luego dar click en continuar

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/f178a6fd-fc9c-4bfd-b148-e74b0d6afac7)

## Archivo BD.sql

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `passwd` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `img` varchar(50) COLLATE utf8_spanish2_ci,
  `rol` int(2) NOT NULL,
  `status` int(2) NOT NULL,
  `created_at` date,
  `updated_at` date,
  CONSTRAINT UC_user UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

  INSERT INTO `user` (`id`,`firstname`,`lastname`,`email`,`passwd`,`img`,`rol`,`status`,`created_at`,`updated_at`) VALUES
(1, 'admin1','admin1', 'admin1@gmail.com', '$2a$12$yR2/jOCceoU9xW17yBM4gunCsc3bw0o85nXpuYZeNQ4zggCXItBfO',null, 1,0,now(),now());


## Uso del postman y las Api con validacion de token 
- Acontunuacion dejare capturas del uso de la api

Ejecutar la siguiente API, debe de salir el siguiente mensaje

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/105aa53b-508d-4b57-a559-4b744b6f342e)

Para crear el token se debe de ejecutar la siguiente URL con los siguientes parametros:

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/83e00adc-3f20-433d-8812-e88672bcc1e0)

Pacra crear un nuevo usuario se deben mandar los siguientes parametros y el token

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/8b19fb6b-6c92-4e4b-9895-c0ed9dbb2bb5)

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/05c60b70-f126-4b65-bf9a-26df40748771)

La siguiente URL trae todos los usuarios registrados 

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/01d8e737-a2b5-4bea-84ff-588132bccfbd)


Finalmente para poder jugar debe de seguir el siguiente orden en los parametros, utilizar la validacion de token

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/ef21b0b5-1b92-4248-b6a6-ac20ff862a92)

![image](https://github.com/juancarlosmz/probabilidad_nodejs/assets/26284266/1097b1fc-1fd9-4f8d-a595-c23e34d4af8f)



