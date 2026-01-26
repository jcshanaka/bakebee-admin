# ---------- DEV ----------
FROM node:20-alpine


WORKDIR /app


# Copy dependency files
COPY package.json package-lock.json* ./


# Install dependencies
RUN npm install


# Copy source
COPY . .


EXPOSE 5000


# Run with hot reload
CMD ["npm", "run", "dev"]