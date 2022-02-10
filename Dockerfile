FROM node:14-alpine
#configure user
RUN addgroup -S app && adduser -S app -G app
USER app
ENV PORT=3000
WORKDIR  /usr/src/app
COPY --chown=app . . 
RUN yarn
EXPOSE 3000
CMD [ "node", "./dist/server" ]
