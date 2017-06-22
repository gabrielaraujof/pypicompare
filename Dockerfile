FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 8081

RUN touch /var/run/nginx.pid && \
  mkdir /var/cache/nginx/client_temp && \
  mkdir /var/cache/nginx/proxy_temp && \
  mkdir /var/cache/nginx/fastcgi_temp && \
  mkdir /var/cache/nginx/uwsgi_temp && \
  mkdir /var/cache/nginx/scgi_temp && \
  chown -R nginx:nginx /var/run/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx/ && \
  chown -R nginx:nginx /var/cache/nginx/client_temp/ && \
  chown -R nginx:nginx /var/cache/nginx/proxy_temp/ && \
  chown -R nginx:nginx /var/cache/nginx/fastcgi_temp/ && \
  chown -R nginx:nginx /var/cache/nginx/uwsgi_temp/ && \
  chown -R nginx:nginx /var/cache/nginx/scgi_temp/

USER nginx
