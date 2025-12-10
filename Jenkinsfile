pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'damars4/my-web-app'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
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
                    echo "Building and pushing Docker image using buildx..."

                    // Login to Docker Hub
                    bat """
                        docker login -u ${env.DOCKER_IMAGE.split('/')[0]} -p ${env.DOCKERHUB_PASSWORD}
                    """

                    // Create buildx builder if not exists
                    bat """
                        docker buildx create --use || echo "Builder already exists"
                    """

                    // Build and push (compressed upload, very stable)
                    bat """
                        docker buildx build --platform linux/amd64 `
                        -t ${DOCKER_IMAGE}:latest --push .
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy step (optional)"
            }
        }
    }

    environment {
        DOCKERHUB_PASSWORD = credentials('docker-hub-credentials')
    }
}
