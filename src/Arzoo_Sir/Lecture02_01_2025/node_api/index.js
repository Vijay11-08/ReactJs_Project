const express = require("express");
const app = express();
const port =3000;

app.get('/', (req, res) => req.setEncoding("Hellow Vijay"));

app.listen(port, () => console.log(`Server is running on port ${port}`));

//create a end point which  / student desplay student name secoun end point /university diplay university name and third /college to display to collage name 
app.get('/student', (req, res) => req.setEncoding("Vijay otaradi"));

app.get('/university', (req, res) => req.setEncoding("Rku University"));

app.get('/collage', (req, res) => req.setEncoding("Rku collage"));

