FROM node:14
WORKDIR /app
COPY package*.json ./
# Install dependencies
RUN npm install
# Install MongoDB and Mongoose
# RUN npm install mongodb mongoose
COPY . .

EXPOSE 8000
CMD [ "node","index" ]
