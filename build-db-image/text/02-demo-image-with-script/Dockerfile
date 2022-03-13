FROM postgres:14.2

RUN apt-get update && apt-get install -y curl

COPY my-docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/my-docker-entrypoint.sh

ENTRYPOINT ["my-docker-entrypoint.sh"]
CMD ["postgres"]
