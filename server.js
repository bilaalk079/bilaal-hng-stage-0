import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors())
app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact;

    const data = {
      status: "success",
      user: {
        email: "kolawolebilaal13@gmail.com",
        name: "Kolawole Bilaal",
        stack: "Node.js(express)",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact",
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at the moment.",
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started successfully on PORT: ${port}`);
});
