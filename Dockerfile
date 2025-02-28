# Use Node.js as base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application files
COPY . .

# Expose port 8000
EXPOSE 8000

# Run the app
CMD ["node", "app.js"]

