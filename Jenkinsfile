pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your_dockerhub_username/my-web-app'      // change this
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'         // change to your Jenkins credentials ID
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    dockerImage = docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing Docker image to Docker Hub..."
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step goes here (optional for now)"
            }
        }

    }
}
