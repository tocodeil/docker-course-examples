FROM postgres:14.2

RUN apt-get update && apt-get install -y curl

COPY my-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/my-entrypoint.sh

ENTRYPOINT ["my-entrypoint.sh"]
CMD ["postgres"]

