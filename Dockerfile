# Use the official Bun image as a parent image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN bun run build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the app
CMD ["bun", "start"]
