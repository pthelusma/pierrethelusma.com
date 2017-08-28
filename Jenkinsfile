node {

    def versionJson = readJSON file: 'version.json'
    def version =  "${versionJson.major}.${versionJson.minor}.${versionJson.patch}.${BUILD_ID}"
    
    stage('Checkout') {
        echo "Checking out source control"
        checkout scm
    }

    stage('Version') {
        currentBuild.displayName = version
    }

    stage('Build') {
        echo "Building from source"
    }
}