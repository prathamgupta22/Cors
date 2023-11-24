import express from "express";
// module style of writing js code

const app = express();

app.use(express.static("dist"));
//means static assest serve krdo

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// GET A LIST OF 5 JOKES
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "B joke",
      content: "This is a joke",
    },
    {
      id: 3,
      title: "C joke",
      content: "This is a joke",
    },
    {
      id: 4,
      title: "D joke",
      content: "This is a joke",
    },
    {
      id: 5,
      title: "E joke",
      content: "This is a joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
