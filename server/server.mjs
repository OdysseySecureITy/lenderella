import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import sgMail from "@sendgrid/mail";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const allowedOrigins = ["https://incredifund.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(helmet())
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }
  
  const msg = {
    to: "info@incredifund.com",
    from: "info@incredifund.com",
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
});


// === Serve Frontend ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../dist");

app.use(express.static(distPath));
app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
