# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All frontend commands should be run within the `frontend/` directory.

- **Install dependencies**: `cd frontend && npm install`
- **Development server**: `cd frontend && npm run dev`
- **Build for production**: `cd frontend && npm run build`
- **Preview production build**: `cd frontend && npm run preview`
- **Infrastructure (Docker)**: `docker-compose up -d` (to start Nginx and ngrok)

## Architecture & Structure

### High-Level Architecture
The project is designed for a phased evolution from a static site to a full-stack application:
- **Phase 1 (Current)**: A React-based frontend serving static data from a JSON file.
- **Phase 2**: Introduction of a local API mock.
- **Phase 3**: Full integration with a backend server (Python/Node.js) and database.

### Infrastructure Setup
- **Nginx**: Serves the production build of the React app.
- **ngrok**: Integrated via Docker to provide a public URL for the Nginx container.
- **Docker Compose**: Orchestrates the web server and connectivity.

### Code Structure
- `frontend/`: React application.
  - `src/data/stocks.json`: The primary data source for Phase 1 (Nifty 200 MidCap stocks).
- `decisions/`: Architecture Decision Records (ADRs) detailing the tech stack and evolution path.
- `tasks.md`: The project roadmap and task tracking.
