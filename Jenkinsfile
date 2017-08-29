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
        parallel api: {
            bat "dotnet restore ./pierrethelusma.api/"
        },
        identity: {
            bat "dotnet restore ./pierrethelusma.identity/"
        }
    }

    stage('Publish') {
        echo "Publishing from build"
        parallel api: {
            bat "dotnet publish ./pierrethelusma.api/ --output C:/inetpub/wwwroot/pierrethelusma.com_api/"
        },
        identity: {
            bat "dotnet publish ./pierrethelusma.identity/ --output C:/inetpub/wwwroot/pierrethelusma.com_identity/"
        }
    }

    stage('Deploy') {
        echo "Deploying"
    }
}