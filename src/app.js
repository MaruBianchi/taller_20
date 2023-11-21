import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;
const KEY = "S3cr3tM4ru";

/* app.use(express.static('public')); */

app.use(cookieParser);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  }); */

app.post("/api/register", (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  const validos = () => {
    for (let prop in obj) {
      if (!obj[prop]) {
        return false;
      }
    }
    return true;
  };

  res.json({
    mensaje: "Test",
  });
});

app.listen(PORT, () => {
  console.log("Server levantado en el puerto: " + PORT);
});
