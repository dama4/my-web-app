pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'damars4/my-web-app'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        DOCKERHUB_PASSWORD = credentials('docker-hub-credentials')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push Image (Buildx)') {
            steps {
                script {

                    echo "Logging in to Docker Hub..."
                    bat """
                        docker login -u ${DOCKER_IMAGE.split('/')[0]} -p ${DOCKERHUB_PASSWORD}
                    """

                    echo "Setting up buildx builder..."
                    bat """
                        docker buildx create --use || echo Builder exists
                    """

                    echo "Building and pushing image using Docker Buildx..."
                    bat """
                        docker buildx build --platform linux/amd64 `
                        -t ${DOCKER_IMAGE}:latest --push .
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step goes here (optional)"
            }
        }
    }
}
