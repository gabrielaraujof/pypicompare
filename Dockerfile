FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

RUN adduser --uid 1001 --gid 0 -D -S -h /var/cache/nginx -s /sbin/nologin pipcompare

EXPOSE 8081

RUN touch /var/run/nginx.pid && \
  mkdir /var/cache/nginx/client_temp && \
  mkdir /var/cache/nginx/proxy_temp && \
  mkdir /var/cache/nginx/fastcgi_temp && \
  mkdir /var/cache/nginx/uwsgi_temp && \
  mkdir /var/cache/nginx/scgi_temp && \
  chown -R pipcompare:0 /var/run/nginx.pid && \
  chown -R pipcompare:0 /var/cache/nginx/ && \
  chown -R pipcompare:0 /var/cache/nginx/client_temp/ && \
  chown -R pipcompare:0 /var/cache/nginx/proxy_temp/ && \
  chown -R pipcompare:0 /var/cache/nginx/fastcgi_temp/ && \
  chown -R pipcompare:0 /var/cache/nginx/uwsgi_temp/ && \
  chown -R pipcompare:0 /var/cache/nginx/scgi_temp/

USER pipcompare
