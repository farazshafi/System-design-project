import express from "express";
import eventRoutes from "./routes/event.routes";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/events", eventRoutes);
app.get("/api/health", (req, res) => {
  res.json({ message: "OK" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


