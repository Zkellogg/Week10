const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const books = [
  {
    title: "Test1",
    author: "John Smith",
    publisher: "goodBooks",
    year: "1997",
  },
  {
    title: "Test2",
    author: "Mark Smith",
    publisher: "goodBooks",
    year: "1995",
  },
  {
    title: "Test3",
    author: "Amy Smith",
    publisher: "goodBooks",
    year: "2000",
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const publisher = req.body.publisher;
  const year = req.body.year;

  const book = {
    title: title,
    author: author,
    publisher: publisher,
    year: year,
  };

  books.push(book);
  res.json({ success: true });
});

app.listen(8080, () => {
  console.log("Running..");
});
