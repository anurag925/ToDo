import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button, Input } from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles'


import './buttn'
// import Example from './buttn';
import { useState } from 'react';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));


// let task=[]

function App() {
  let [text,uptext]=useState("")
  let [task,updatetask]=useState([])
  // console.log("test")
  return (
    
    <div className="Main">
      {/* <p>{text}</p> */}
      {/* <Example /> */}
      <h1>To-Do</h1>
      <div className="inputdata">
      <TextField id="input" name="input" label="To DO" variant="outlined" onChange={e=>{uptext(e.target.value)}}/>
      
      <Button id="add" className="add" variant="outlined" color="primary" 
      disabled={!text.length}
      onClick={()=>{
        let data={
          id:Date.now(),
          todo:text
        }
        // console.log("hey")
        let temp=[...task]
        temp.push(data)
        updatetask(temp)
        uptext("")
        document.getElementById("input").value=""
        
      }}>ADD</Button>
      </div>
      <div className="list">
        <ul>
        {
          task.map((val,ind)=>{
            return(
              <li key={ind}>{val.todo}
              <Button id={ind} className="delete" color="secondary" 
              style={{justifyContent: 'left'}}
              variant='outlined'
              onClick={()=>{
                let temp=[...task]
                // console.log(ind)
                temp.splice(ind,1)
                // console.log(temp)
                updatetask(temp)
              }} >
              Done</Button></li>
            )
          })
        }
        </ul>
        </div> 
    </div>
  );
}

export default App;
