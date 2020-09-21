import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import TODO from './TODO';
import { db } from './firebase';
import firebase from "firebase";

function App() {
  const [todos,setTodos]=useState([""]);
  const[input,setInput]=useState("");
  console.log(input);
  useEffect(() => {
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})));
    })
  }, []);
  const addtodo=(event)=>{
    event.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput("");
  }
  return (
    <div class="java_list">
     <div className="App">
       <h1>Hello Guys!!</h1>
       <form>
         <FormControl>
            <InputLabel>✅ Write a TODO </InputLabel>
           <Input value={input} onChange={event =>setInput(event.target.value)}/>
         </FormControl>
         <Button disabled={!input}type="submit"onClick={addtodo} variant="contained" color="primary">
           ADD TODO!#
         </Button>
        
        </form>
      
       <ul>
         {todos.map(todo=>(
           <TODO todo={todo}/>
          
         ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
