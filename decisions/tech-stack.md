# Decision: Tech Stack
- **Frontend**: React (Selected by user). This allows for a component-based architecture that will make the transition to a backend API in later phases much easier than vanilla HTML.
- **Web Server**: Nginx. It will serve the built React production files.
- **Infrastructure**: Docker & Docker Compose.
- **Connectivity**: ngrok integrated as a container in `docker-compose.yml`.
- **Data**: Initial phase uses a static `stocks.json` file.

**Why**: This stack provides a professional development environment while meeting the "no backend for now" requirement. Using React ensures that the "Phase-wise development" is sustainable.
