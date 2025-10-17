### Build stage
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the TypeScript application
RUN npm run esbuild

### End of build stage


### Production stage
FROM node:22-alpine AS production

RUN apk add --no-cache curl

# Set working directory
WORKDIR /app

# Copy built application from builder stage (esbuild bundles all dependencies)
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"] 