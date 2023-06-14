pipeline{
    agent any
    tools {nodejs "NodeJS"}
    stages{
        stage("Install"){
            steps {
                sh "npm install"
            }
        }
        stages("Build"){
            steps {
                sh "npm run build"
            }
        }
        stages("Deploy"){
            steps{
                sh "rm -rf /usr/local/var/www/react-app/build"
                sh "cp -R /Users/aakash/.jenkins/workspace/reactmay/build /usr/local/var/www/react-app/build"
            }
        }
    }
}