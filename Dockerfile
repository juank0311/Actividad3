FROM mysql:latest

# Definir variables de entorno 
ENV MYSQL_ROOT_PASSWORD rootpassword
ENV MYSQL_DATABASE gestion_financiera
ENV MYSQL_USER usuario
ENV MYSQL_PASSWORD password

# Exponer el puerto predeterminado de MySQL
EXPOSE 33066
