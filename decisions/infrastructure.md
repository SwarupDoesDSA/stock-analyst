# Decision: Infrastructure Architecture
- **Nginx Container**: Acts as the entry point, serving the React build folder.
- **ngrok Container**: Maps an external public URL to the Nginx container's port 80.
- **Build Process**: React code will be built (npm run build) and the resulting `dist` or `build` folder will be mounted/copied into the Nginx container.

**Why**: This setup isolates the environment and ensures the website is accessible via the internet without manual ngrok commands on the host machine.
