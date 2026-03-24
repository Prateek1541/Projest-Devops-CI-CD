# DevOps CI/CD Pipeline with GitHub Actions, Docker, and AWS EC2

[![Deploy to EC2](https://github.com/Prateek1541/Projest-Devops-CI-CD/actions/workflows/deploy.yml/badge.svg)](https://github.com/Prateek1541/Projest-Devops-CI-CD/actions/workflows/deploy.yml)

## 📌 Project Overview

This project demonstrates a **complete CI/CD pipeline** that automatically builds and deploys a containerized Node.js application using **GitHub Actions, Docker, Docker Hub, and AWS EC2**.

Whenever new code is pushed to the repository, the pipeline automatically:

1. Builds a Docker image
2. Pushes the image to Docker Hub
3. Connects to the AWS EC2 server
4. Pulls the latest Docker image
5. Deploys the updated container

This eliminates manual deployment and ensures continuous delivery.

---

## 🚀 Technologies Used

* GitHub Actions (CI/CD automation)
* Docker (containerization)
* Docker Hub (image registry)
* AWS EC2 (cloud hosting)
* Node.js
* Express.js

---

## ⚙️ CI/CD Pipeline Workflow

The deployment process follows this automated pipeline:

Developer pushes code → GitHub Repository → GitHub Actions CI/CD → Build Docker Image → Push to Docker Hub → SSH to AWS EC2 → Pull Image → Run Docker Container → Application Updated

---

## 🏗 Architecture

```
Developer
   │
   │ git push
   ▼
GitHub Repository
   │
   ▼
GitHub Actions (CI/CD)
   │
   ▼
Docker Hub (Image Registry)
   │
   ▼
AWS EC2 Server
   │
   ▼
Docker Container
   │
   ▼
Node.js API
```

---

## 📂 Project Structure

```
.
├── .github/workflows/
│   └── deploy.yml
├── Dockerfile
├── package.json
├── index.js
└── README.md
```

---

## 🐳 Docker Setup

Build the Docker image locally:

```
docker build -t cicd-app .
```

Run the container:

```
docker run -d -p 8080:8080 cicd-app
```

---

## ☁️ Deployment

The application is deployed on **AWS EC2** using Docker containers.

Deployment is fully automated through **GitHub Actions CI/CD pipelines**.

Every push to the `main` branch triggers automatic deployment.

---

## 🔗 Live Application

Example:

```
http://<EC2_PUBLIC_IP>:8080
```

---

## 🎯 Key Features

* Automated CI/CD pipeline
* Dockerized Node.js application
* Continuous deployment to AWS EC2
* Docker Hub image registry integration
* GitHub Actions workflow automation

---

## 📈 Learning Outcomes

Through this project I learned:

* Designing CI/CD pipelines
* Containerizing applications using Docker
* Automating deployments using GitHub Actions
* Deploying containerized applications on AWS EC2
* Integrating Docker Hub as an image registry

---

## 👨‍💻 Author

**Prateek Tripathi**

GitHub: https://github.com/Prateek1541
LinkedIn: https://www.linkedin.com/in/prateek-tripathi29/

---
