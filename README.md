# Stock Analyst Website

A professional stock analysis platform focusing on Nifty 200 MidCap stocks. This project is designed to evolve from a static information site into a full-stack analytical tool.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### Local Development
To run the frontend in development mode:
```bash
cd frontend
npm install
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Setup (with Public Access)
This project uses Nginx to serve the build and ngrok to provide a public URL.
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Start the infrastructure:
   ```bash
   docker-compose up -d
   ```
3. Check the ngrok logs or dashboard to find your public URL.

## 🛠 Architecture

### Tech Stack
- **Frontend**: React + Vite
- **Web Server**: Nginx (via Docker)
- **Connectivity**: ngrok (via Docker)
- **Data**: Static JSON (`frontend/src/data/stocks.json`) for Phase 1.

### Evolution Roadmap
- **Phase 1 (Current)**: Static site with hardcoded stock data.
- **Phase 2**: Implementation of a local API mock server.
- **Phase 3**: Full backend integration (Python/Node.js) with a database and real-time stock APIs.

## 🗺 Suggested Feature Roadmap

### Near-Term Enhancements
- [ ] **Real-time Data**: Transition from `stocks.json` to a live API (e.g., Alpha Vantage, Yahoo Finance).
- [ ] **Advanced Filtering**: Add search and filter capabilities for stock categories and performance.
- [ ] **Detailed Stock Views**: Create dedicated pages for each stock with historical data.

### Long-Term Vision
- [ ] **User Accounts**: Implementation of JWT-based authentication.
- [ ] **Personalized Watchlists**: Allow users to save and track their favorite stocks.
- [ ] **Interactive Charts**: Integrate libraries like Recharts or TradingView for technical analysis.
- [ ] **AI Insights**: Use LLMs to summarize stock news and provide sentiment analysis.
