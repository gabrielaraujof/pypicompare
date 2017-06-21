FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 8443

RUN mkdir -p /var/cache/nginx/ && \
  chmod -R a+rwx /etc/nginx && \
  chmod -R a+rwx /var/cache/nginx && \
  chown -R 1001:0 /etc/nginx && \
  chown -R 1001:0 /var/cache/nginx

USER 1001

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
