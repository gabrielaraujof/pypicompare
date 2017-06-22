FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 8081

# RUN adduser -u 1001 -G root -s /bin/sh -D pipcompare

RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx

USER nginx

# ENTRYPOINT ["nginx"]
# CMD ["-g", "daemon off;"]
