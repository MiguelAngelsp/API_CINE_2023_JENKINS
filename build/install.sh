cd /var/lib/jenkins/workspace/Proyectos/Job-pCine/api/

export $(cat .env | xargs)

# LEVANTAR LA API
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/api/docker-compose.yml build --no-cache
# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/api/docker-compose.yml down 
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/api/docker-compose.yml up -d
#LEVANTAR LA APP
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/appcine/docker-compose.yml build --no-cache
# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/api/docker-compose.yml down 
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/appcine/docker-compose.yml up -d --remove-orphans