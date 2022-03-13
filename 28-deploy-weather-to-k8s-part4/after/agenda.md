# Deploy Weather App To Kubernetes

## Part 2

[x] Create k8s manifest files

[x] Add ingress controller and rules

## Part 3

[x] Fix db pods
  - secret file (directory)
  - subPath mount point

[x] Create new env file for k8s

## Part 4

[x] Convert query script to scheduled task




## Useful Snippets

1. Top:

```
apiVersion: batch/v1beta1
kind: CronJob
```

2. Delete key "strategy"

3. Change "restartPolicy" to "Never"

4. Delete key "selector"

5. Create schedule

```
spec:
  schedule: "* * * * *"
  jobTemplate:
    spec:
```













