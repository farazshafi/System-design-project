import express from "express";
import eventRoutes from "./routes/event.routes";
import { limiter } from "./middlewares/limiter.middleware";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(limiter);

app.use("/events", eventRoutes);
app.get("/api/health", (req, res) => {
  res.json({ message: "OK" });
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.keepAliveTimeout = 5000;
server.headersTimeout = 6000;
server.maxConnections = 200;

