# Docker Express App 🚀

This is a beginner project that demonstrates how to create a simple web application using Express.js and Docker. The application responds with different greetings based on the URL path. 🌟

## Table of Contents 📚

1. Technologies Used 🛠️
2. Getting Started 🚀
3. Project Structure 📁
4. How to Run the Application ▶️
5. Endpoints 📡

## 1. Technologies Used 🖥️

- Node.js: JavaScript runtime for building the application. 🟢
- Express.js: Web framework for Node.js. 🌐
- Docker: Platform for developing, shipping, and running applications in containers. 🐳

## 2. Getting Started 🔧

To get started with this project, you will need to have Docker and Docker Compose installed on your machine.

### Prerequisites ✅

- Docker 🐳
- Docker Compose 📦

## 3. Project Structure 🗂️

```text
docker-express-app/
├── .dockerignore
├── docker-compose.yml
├── Dockerfile
├── index.js
├── package.json
└── README.md
```

- index.js: The main application file containing the Express.js server. 💻
- Dockerfile: Instructions for building the Docker image. 📜
- docker-compose.yml: Configuration file for Docker Compose. ⚙️
- .dockerignore: Specifies files and directories that should be ignored by Docker. 🚫
- package.json: Contains metadata about the project and its dependencies. 📄

## 4. How to Run the Application 🏃‍♂️

* Clone the repository:

```shell
git clone https://github.com/patricnilackshan/Docker-Express-App.git
cd Docker-Express-App
```

* Build and run the application using Docker Compose:

```shell
docker-compose up --build
```

* Access the application:

    - Open your web browser and go to http://localhost:8000 🌐
    
    - You can also visit http://localhost:8000/PATRIC and http://localhost:8000/USER for different greetings. 🎉

## 5. Endpoints

   * GET /: Returns "Hello WORLD" 🌎✨

   * GET /PATRIC: Returns "Hello PATRIC" 👋😄

   * GET /USER: Returns "Hello USER" 👨‍💻🌟

<br>

### © PATRIC NILACKSHAN (pnilackshan@gmail.com)

<img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=patricnilackshan.Docker-Express-App" />
