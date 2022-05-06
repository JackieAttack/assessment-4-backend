const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postBoard, deletePost} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/share", postBoard);
app.delete("/api/share/:btnId", deletePost)
//app.push("/api/share/:btnId", changePost)

app.listen(4000, () => console.log("Server running on 4000"));

//must have POST PUT and DELETE as well (required)