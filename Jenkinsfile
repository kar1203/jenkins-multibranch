pipeline { 
  
   agent any

   tools {
      nodejs "NodeJS"
   }

   stages {

     stage('Install Dependencies') { 
        steps { 
           sh 'npm install' 
        }
     }
     
     stage('Test') { 
        steps { 
           sh 'echo "testing application..."'
        }
      }

      stage("Deploy application") { 
         steps {
               withCredentials([sshUserPrivateKey(credentialsId: "jenkins-ssh", keyFileVariable: 'sshkey')]){
               echo 'deploying the application...'
               sh '''#!/bin/bash
               echo "Creating .ssh"
               mkdir -p /var/lib/jenkins/.ssh
               ssh-keyscan 10.1.1.202 >> /var/lib/jenkins/.ssh/known_hosts
         
               rsync -avz --exclude  '.git' --delete -e "ssh -i $sshkey" ./ root@10.1.1.202:/app/

               ssh -i $sshkey root@10.1.1.202 "sudo systemctl restart nodeapp"

               '''
            }
         }
      }
   }
}
