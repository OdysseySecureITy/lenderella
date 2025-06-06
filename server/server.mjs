import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import sgMail from "@sendgrid/mail";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";


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

//security policies for helmet to have 3rd party tools to have permission on the website
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "https://cdn.jotform.ms/",
        "https://cdn.jotfor.ms",
        "https://embed.tawk.to/",
        "https://cdn.jsdelivr.net/",
      ],
      frameSrc: ["'self'", "https://form.jotform.com/", "https://submit.jotform.com/"],
      connectSrc: [
        "'self'",
        "https://embed.tawk.to/",
        "https://va.tawk.to/",
        "wss://*.tawk.to/",
      ],
      styleSrc: ["'self'", "'unsafe-inline'", "https://embed.tawk.to/"], // If needed for Jotform/Tawk.to styling
      styleSrcElem: ["'self'", "'unsafe-inline'", "https://embed.tawk.to/"],
      imgSrc: ["'self'", "data:", "https://embed.tawk.to/", "https://cdn.jsdelivr.net/"],
    },
  })
);

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
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

if (!fs.existsSync(distPath)) {
  console.error("Static directory not found");
}else{
  console.log("static directory found");
}
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(express.static(distPath));
app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
