import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";

export default function Crud() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [change, setChange] = useState(false);

  useEffect(() => {
    const allRecords = JSON.parse(localStorage.getItem("Students")) || [];
    setStudents(allRecords);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { id: Date.now(), name, subject, city };
    const updatedStudents = [...students, obj];
    localStorage.setItem("Students", JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
    setName("");
    setSubject("");
    setCity("");
  };

  const handleDelete = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    localStorage.setItem("Students", JSON.stringify(filteredStudents));
    setStudents(filteredStudents);
  };

  const handleEdit = (i) => {
    setChange(true);
    setEditIndex(i);
    setName(students[i].name);
    setSubject(students[i].subject);
    setCity(students[i].city);
  };

  const handleUpdate = () => {
    const updatedStudents = [...students];
    updatedStudents[editIndex] = {
      id: students[editIndex].id,
      name,
      subject,
      city,
    };
    localStorage.setItem("Students", JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
    setChange(false);
    setName("");
    setSubject("");
    setCity("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#405D72",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container
        component={Paper}
        maxWidth="md"
        sx={{ padding: "20px", textAlign: "center", backgroundColor:"#FFF8F3",}}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
          REACT CRUD & MATERIAL UI
        </Typography>
        <form onSubmit={handleSubmit} >
          <TextField
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            type="text"
            value={subject}
            placeholder="Enter Subject"
            onChange={(e) => setSubject(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ marginBottom: "10px" }}
          />
          {!change ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ margin: "10px auto" }}
            >
              ADD BLOG
            </Button>
          ) : (
            <Button
              onClick={handleUpdate}
              variant="contained"
              color="primary"
              sx={{ margin: "10px auto" }}
            >
              Update
            </Button>
          )}
        </form>
        <Table sx={{ marginTop: "20px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell colSpan={2}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.subject}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEdit(index)}
                    variant="outlined"
                    color="primary"
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(index)}
                    variant="outlined"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
         
    </Box>
  );
}