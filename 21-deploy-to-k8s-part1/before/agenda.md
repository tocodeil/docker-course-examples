# Deploy Counter Service to Minikube Cluster

[ ] Reminder: Counter Service Code

[ ] Create a production ready docker-compose-k8s.yml
  - Create Dockerfile for "web" service
  - Build and push image
  - Change image in service block
  - Run to verify everything still works

[ ] Create kubernetes manifests
  - kompose convert -f ../docker-compose-k8s.yml
  - review the created files

[ ] Add redis-service manifest

[ ] Install everything on the cluster
  - get a shell on web container
  - verify everything works from there

[ ] Add ingress.yaml rules
  - install nginx: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
  - Create ingress.yaml with the right settings
  - apply -f ingress.yaml
  - verify you can now connect to the service using "localhost"
