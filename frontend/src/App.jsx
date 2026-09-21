import React, { useState, useMemo } from "react";
import stocksData from "./data/stocks.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");
  const [sortConfig, setSortConfig] = useState({
    key: "symbol",
    direction: "asc",
  });
  const [selectedStock, setSelectedStock] = useState(null);

  // Get unique sectors for the filter dropdown
  const sectors = useMemo(() => {
    const s = stocksData.map((stock) => stock.sector);
    return ["All", ...new Set(s)];
  }, []);

  // Filter and Sort Logic
  const filteredStocks = useMemo(() => {
    let result = stocksData.filter((stock) => {
      const matchesSearch =
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector =
        selectedSector === "All" || stock.sector === selectedSector;
      return matchesSearch && matchesSector;
    });

    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [searchTerm, selectedSector, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Nifty 200 MidCap Analyst</h1>
        <p>Real-time insights into India's mid-cap growth leaders</p>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by symbol or company..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="sector-select"
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
        >
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      <main>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th onClick={() => requestSort("symbol")}>
                  Symbol{" "}
                  {sortConfig.key === "symbol"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th onClick={() => requestSort("name")}>
                  Company Name{" "}
                  {sortConfig.key === "name"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th onClick={() => requestSort("sector")}>
                  Sector{" "}
                  {sortConfig.key === "sector"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th>Industry</th>
                <th onClick={() => requestSort("marketCap")}>
                  Market Cap{" "}
                  {sortConfig.key === "marketCap"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th onClick={() => requestSort("pe")}>
                  P/E Ratio{" "}
                  {sortConfig.key === "pe"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th>Chart</th>
              </tr>
            </thead>
            <tbody>
              {filteredStocks.map((stock) => (
                <tr key={stock.symbol} className="clickable-row">
                  <td
                    className="symbol"
                    onClick={() => setSelectedStock(stock)}
                  >
                    {stock.symbol}
                  </td>
                  <td>{stock.name}</td>
                  <td>{stock.sector}</td>
                  <td>{stock.industry}</td>
                  <td>{stock.marketCap}</td>
                  <td>{stock.pe}</td>
                  <td>
                    <a
                      href={`https://www.tradingview.com/symbols/NSE-${stock.symbol}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      📈
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {selectedStock && (
        <div className="modal-overlay" onClick={() => setSelectedStock(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>
              {selectedStock.name} ({selectedStock.symbol})
            </h2>
            <hr />
            <div className="modal-grid">
              <div className="modal-item">
                <strong>Sector:</strong> {selectedStock.sector}
              </div>
              <div className="modal-item">
                <strong>Industry:</strong> {selectedStock.industry}
              </div>
              <div className="modal-item">
                <strong>Market Cap:</strong> {selectedStock.marketCap}
              </div>
              <div className="modal-item">
                <strong>P/E Ratio:</strong> {selectedStock.pe}
              </div>
            </div>
            <div className="analysis-section">
              <h3>Preliminary Analysis</h3>
              <p>
                This is a placeholder for the analysis engine. In Phase 3, this
                will be replaced by dynamic data from the backend API,
                calculating relative valuation and growth metrics.
              </p>
            </div>
            <button
              className="close-btn"
              onClick={() => setSelectedStock(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
