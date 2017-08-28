node {
    
    stage('Checkout') {
        echo "Checking out source control"
        checkout scm
    }

    stage('Version') {
        def versionJson = readJSON file: './version.json'
        def version =  "${versionJson.major}.${versionJson.minor}.${versionJson.patch}.${BUILD_ID}"
        currentBuild.displayName = version
    }

    stage('Build') {
        echo "Building from source"
    }

    stage('Deploy') {
        echo "Deploying"
    }
}