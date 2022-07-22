docker build --platform=linux/amd64 -t docker.terraqt.io/webserver/oversea-site:v2022.07.22.1 .
docker push docker.terraqt.io/webserver/oversea-site:v2022.07.22.1
docker rmi docker.terraqt.io/webserver/oversea-site:v2022.07.22.1
