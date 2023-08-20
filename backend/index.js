import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ origin: true }));

// --- Sign Up ---
app.post("/signup", async (req, res) => {
  const { username, first_name, last_name, email, secret } = req.body;
  try {
    const user = await axios.post(
      "https://api.chatengine.io/users/",
      {
        username,
        first_name,
        last_name,
        email,
        secret,
      },
      { headers: { "private-key": process.env.PRIVATE_KEY } }
    );
    return res.status(201).json(user.data);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

// --- Sign In ---
app.post("/login", async (req, res) => {
  const { username, secret } = req.body;
  try {
    const user = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": process.env.PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(200).json(user.data);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

// --- Listen to the server
app.listen(3001);
