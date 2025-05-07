# Stage 1: Build the project
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies using a clean install
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Build the project. This builds the Astro standalone server.
RUN npm run build

# Stage 2: Run the standalone server
FROM node:22-alpine AS runner
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production

# Copy the production build from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose the default port (adjust if necessary)
EXPOSE 3000

# Start the server using the built standalone entry file
CMD ["node", "dist/server/entry.mjs"]