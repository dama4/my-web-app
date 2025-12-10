pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'dir'      // Windows command
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                bat 'echo Tests completed'   // placeholder test
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying..."
                bat 'echo Deployment completed'
            }
        }
    }
}
