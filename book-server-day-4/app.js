const express = require("express");
const cors = require("cors");
const app = express();
global.bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());

// app.use(
//   session({
//     secret: "ljjojh",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(express.urlencoded());

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

const users = [
  {
    userId: 1,
    username: "John",
    password: "test1",
  },
  {
    userId: 2,
    username: "Mark",
    password: "test2",
  },
  {
    userId: 3,
    username: "Amy",
    password: "test3",
  },
  {
    userId: 4,
    username: "zac",
    password: "$2a$10$nZvxjzksuMbqiTc6meHHuej6M1krHFtAnelWh6CoCik7IEeMKksxG",
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

app.post("/api/signup", (req, res) => {
  const userId = users.length + 1;
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.hash(password, 10, (err, hash) => {
    const user = { userId: userId, username: username, password: hash };

    users.push(user);
  });

  res.json({ success: true });
});

app.post("/api/login", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const confirmedUser = users.filter((user) => user.username == username);

  console.log(confirmedUser[0].password);

  bcrypt.compare(password, confirmedUser[0].password, function (err, response) {
    if (response) {
      res.json({ loggedIn: true });
    }
    // } else {
    //   res.send(null);
    // }
  });
});
app.listen(8080, () => {
  console.log("Running..");
});
