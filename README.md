# Simple Docker Compose Project  

## Introduction
The project is running on with theses servieces
 - Web Server (Nginx)
 - Front-End (React)
 - Back-End (Nodejs)
 - Database (MongoDB)
 - Cache Database (Redis)

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)



## Project Structure
The project is simple admin dashboard to make CRUD operations on books through UI and 
add multiple Nodejs containers to make nginx handle the load on our backend server which
ofcourse communicates with our NoSQL database (MongoDB) and cache database (Redis). 



## Prerequisites
You should have [docker](https://www.docker.com/) already installed on your machine.



## Installation
Make sure you are on ./Node directory and run this command
~~~sh
docker compose up --build -d
~~~

This command will pull the required images **if not already pulled** and 
make the needed containers and run the required commands to install dependencies 
in order to run our app



## Configuration
There is not much configs to add here but feel free to make your own credintels on
mongodb service on **docker-compose.yml** file.



## Usage
Write the following url on your prefered browser 
~~~sh
http://localhost:8080
~~~

and you should now see Home page and link to dashboard page
