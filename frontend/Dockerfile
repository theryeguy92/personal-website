# Use an official Node.js runtime as the base image for building the React app
FROM node:16-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Verify Chakra UI installation
RUN npm list @chakra-ui/react

# Build the React application
RUN npm run build

# Use NGINX as the production web server
FROM nginx:alpine

# Copy built React app to NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default NGINX port)
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
