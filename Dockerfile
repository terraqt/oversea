FROM node:lts 

WORKDIR /app
RUN node -v
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build 
ENV NODE_ENV production
EXPOSE 8080

CMD ["npm", "run", "start"]
