const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

var students = [
  {
    enrollment_no: "22SOEIT11020",
    name: "Otaradi Vijay",
    branch: "IT",
    sem: 6,
    div: "A",
    roll_no: 18,
  },
];

//Fetch  all students
app.get("/", (req, res) => res.json(students));

// To add a new student
app.post("/", (req, res) => {
    const {enrollment_no, name, branch, sem, div, roll_no} = req.body;
    students = [...students, {enrollment_no, name, branch, sem, div, roll_no }];
    res.json(students);
    }
);

// To update a student
app.put("/:enrollment_no", (req, res) => {
    const enrollment_no = req.params.enrollment_no;;
    const {name, branch, sem, div, roll_no} = req.body;
    students =students.map((student)=> 
            student.enrollment_no == enrollment_no 
            ? {enrollment_no, name, branch, sem, div, roll_no }
            : student );
    [...students, {enrollment_no, name, branch, sem, div, roll_no }];
    res.json(students);
});

app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);
