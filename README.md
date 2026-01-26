# bakebee-admin

A full-stack admin application built with Express.js, React, TypeScript, and PostgreSQL.

## Project Structure

```
bakebee-admin/
├── backend/          # Express.js API server
├── frontend/         # React + Vite application
├── mobile/           # Mobile application
└── docker-compose.yml
```

## Prerequisites

Before you start, make sure you have installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org)
- **npm** or **yarn** - Comes with Node.js
- **Docker** and **Docker Compose** - [Download](https://www.docker.com)
- **Git** - [Download](https://git-scm.com)

## Installation Guide

### Option 1: Using Docker (Recommended)

This will set up the entire stack with one command.

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd bakebee-admin
   ```

2. **Start all services**:
   ```bash
   docker-compose up -d
   ```

3. **Access the applications**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Database: localhost:5432

4. **Stop all services**:
   ```bash
   docker-compose down
   ```

### Option 2: Local Development Setup

Run each service separately on your machine.

#### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file** (if needed):
   ```bash
   cp .env.example .env  # or create .env manually
   ```

4. **Run the server**:
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm run build
   npm start
   ```

5. **Server will run on**:
   - API: http://localhost:5000
   - Health Check: http://localhost:5000/health

#### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

6. **Frontend will run on**:
   - http://localhost:5173

#### Database Setup

PostgreSQL is included in Docker Compose. If running locally:

1. **Install PostgreSQL** - [Download](https://www.postgresql.org/download)

2. **Create database**:
   ```bash
   createdb bakebeeadmin
   ```

3. **Update backend .env** with database credentials

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled server

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Docker Commands

```bash
# Start all services in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Rebuild images
docker-compose build

# Remove containers and volumes
docker-compose down -v
```

## Troubleshooting

### Port Already in Use
If port 5000, 5173, or 5432 is already in use:

```bash
# Stop existing containers
docker-compose down

# Remove specific container
docker rm -f backend
docker rm -f frontend
docker rm -f postgres
```

### Module Not Found
If you get missing dependencies errors:

```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Environment Variables

### Backend (.env)
```
PORT=5000
DATABASE_URL=postgresql://postgres:postgres@db:5432/bakebeeadmin
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## API Documentation

### Health Check
- **GET** `/health` - Returns server status

```json
{
  "status": "OK"
}
```

### Home
- **GET** `/` - Returns welcome message

