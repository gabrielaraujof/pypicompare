FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

RUN chmod -R a+rwx /var/run && \
    chmod -R a+rwx /var/cache/nginx && \
    chmod -R a+rwx /var/log/nginx && \
    chmod -R g+rwX /etc/nginx && \
    chown -R 1001:0 /var/cache/nginx && \
    chown -R 1001:0 /var/log/nginx && \
    chown -R 1001:0 /etc/nginx && \
    rm /etc/nginx/conf.d/default.conf

USER 1001

EXPOSE 8080
