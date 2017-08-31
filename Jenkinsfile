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

        echo "Stopping IIS"
        bat "iisreset /stop"

        parallel api: {
            bat "dotnet publish ./pierrethelusma.api/ --output C:/inetpub/wwwroot/pierrethelusma.com_api/"
        },
        identity: {
            bat "dotnet publish ./pierrethelusma.identity/ --output C:/inetpub/wwwroot/pierrethelusma.com_identity/"
        },
        web: {
            bat "cd ./pierrethelusma.web/ && npm install && ng build --output-path C:/inetpub/wwwroot/pierrethelusma.com_web/ && cd .."
        }

        echo "Starting IIS"
        bat "iisreset /start"
    }
}