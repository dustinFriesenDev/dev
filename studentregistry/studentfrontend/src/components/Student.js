import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Student() {
    const [name, setName]=useState('');
    const [address, setAddress]=useState('');
    const [students, setStudents]=useState([]);
    const handleClick = (e) => {
        e.preventDefault()
        const student={name, address}
        fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
  })
}

useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result);
    }
)
},[])

  return (
    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Student Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />      
      <TextField id="standard-basic" label="Student Address" variant="standard" value={address} onChange={(e)=>setAddress(e.target.value)} />
      <Button variant="contained" onClick={handleClick}>Submit</Button>
  
    </Box>
    <Container maxWidth="sm">
     <h1>Students</h1>
    {students.map(student=>(
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} key={student.id}>Id:{student.id}
             Id:{student.id}<br/>
             Name: {student.name}<br/>
             Address:{student.address}

          </Box>
          ))}
        </Container>
      
    </Container>
  );
 
}
