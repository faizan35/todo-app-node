# base image with node js
FROM node:18.18-alpine

# Working dir with all the code
WORKDIR /app

# Copy code src to des
COPY . .

# Install packages
RUN npm install

# app is ready

# Run the container with args
CMD ["node","app.js"]
