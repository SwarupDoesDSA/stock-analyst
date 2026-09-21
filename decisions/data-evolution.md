# Decision: Phase-wise Data Evolution
- **Phase 1**: `src/data/stocks.json` -> Loaded directly by React components.
- **Phase 2**: Local API Mock -> React calls a local mock server.
- **Phase 3**: Real Backend -> React calls an API (Python/Node) which connects to a Database and external Stock APIs.

**Why**: This decoupled approach allows the UI to be fully developed and tested before the complexity of a database and backend is introduced.
