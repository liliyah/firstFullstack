import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, margin } from '@mui/system';
import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';



export default function Student() {
  const [name,setName]=React.useState('');
  const [address,SetAddress]=React.useState('');
  const[studends,setStudents]= React.useState([]);
  const handleclick=(e)=>{
    e.preventDefault()
    const Student ={name,address}
    fetch("http://locahost:8080/student/add",{
      method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify(Student)
  }).then(()=>{console.log("new student has been added")})}
  React.useEffect(()=>{
  fetch("http://locahost:8080/student/getAll").then(re=>re.json()).then((result)=>{setStudents(result);
})},[])
  return (
    <Container>
      <h1 style={{color:"blue"}}>Student Form</h1>
    <form className={ClassNames.root} noValidate autoComplete="off">
       <TextField id="outlined-basic"   label="Student Name" variant="outlined"  fullWidth value={name}
       onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth  value={address}
      onChange={(e)=>SetAddress(e.target.value)}
      />
<Button variant="contained" onClick={handleclick}>click me</Button>
      </form>
      </Container>
  );
}
