FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 8081

# RUN adduser -u 1001 -G root -s /bin/sh -D nginx

RUN adduser nginx root

RUN touch /var/run/nginx.pid && \
#   mkdir /var/cache/nginx/client_temp && \
  chown -R nginx:nginx /var/run/nginx.pid
#   chown -R nginx:nginx /var/cache/nginx/client_temp && \
#   chown -R nginx:nginx /var/cache/nginx/

USER nginx
