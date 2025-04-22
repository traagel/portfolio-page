#!/bin/sh
docker build -t traagel/portfolio-page:latest .
docker login
docker push traagel/portfolio-page:latest 