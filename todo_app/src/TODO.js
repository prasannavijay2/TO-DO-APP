import { Avatar, Box, Button, ImageIcon,ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import "./TODO.css";
import { List, } from '@material-ui/core';
import { db } from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function TODO(props) {
    const classes=useStyles();
    const [open,setOpen]=useState(false)
    const [input,setInput]=useState("");
    const handleOpen =()=>{
        setOpen(true);
    };
    const handleClose =()=>{
        setOpen(false);
    };
    const update=()=>{
        db.collection("todos").doc(props.todo.id).set({
          todo:input
        },{merge:true})
      setOpen(false);
    };
    return (
        <>
        <Modal open={open} onClose={e=>setOpen(false)}>
            <div className={classes.paper}>
                <h1>I AM MODAL!!</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                <Button onClick={update} variant="contained" color="primary">UPDATE TODO!</Button>
            </div>
        </Modal>
        <div>
            <List class="todo_list">
              <ListItem>
                   <ListItemAvatar>
                      
                   </ListItemAvatar>
                   <ListItemText primary={props.todo.todo} secondary="DEADLINE⏰"></ListItemText>
               </ListItem>
              
                 <Button variant="contained" color="secondary" onClick={e=>setOpen(true)}>Edit!</Button>
               
               
                 <Button variant="contained" color="primary"><DeleteForeverIcon onClick={event=>  db.collection("todos").doc(props.todo.id).delete()}/></Button>
               
            
            </List> 
         </div>
        </>
    )
}

export default TODO
