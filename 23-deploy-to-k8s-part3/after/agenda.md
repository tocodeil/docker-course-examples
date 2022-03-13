# Deploy Counter Service to Local Cluster

[x] Reminder: Counter Service Code

[x] Create a production ready docker-compose-k8s.yml
  - Create Dockerfile for "web" service
  - Build and push image
  - Change image in service block
  - Run to verify everything still works

[x] Create kubernetes manifests
  - kompose convert -f ../docker-compose-k8s.yml
  - review the created files

[x] Add redis-service manifest

[x] Install everything on the cluster
  - get a shell on web container
  - verify everything works from there

[x] Add ingress.yaml rules
  - install nginx: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
  - Create ingress.yaml with the right settings
  - apply -f ingress.yaml
  - verify you can now connect to the service using "localhost"


[x] Ingress Controller
  - nginx
  - ingress rules

















## Useful Snippet

ingress.yaml

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress
  annotations:
    kubernetes.io/ingress.class: "nginx"
spec:
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web
                port:
                  number: 3000
```
