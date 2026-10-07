# Day 6 recap: the same static site, containerized.
# Build:  docker build -t portfolio .
# Run:    docker run -p 8080:80 portfolio   → http://localhost:8080
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/ /usr/share/nginx/html/
EXPOSE 80
