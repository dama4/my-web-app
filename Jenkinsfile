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

        stage('Build & Push Image') {
            steps {
                script {
                    echo "Building & pushing Docker image..."

                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {

                        def img = docker.build("${DOCKER_IMAGE}:latest")

                        img.push("latest")
                    }

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
