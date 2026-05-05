import {   useEffect, useState } from 'react'


import React from 'react'
import axios from 'axios'

const App = () => {

const [notes, setNotes] = useState([
  {
  title:"test title",
  description:"test description",
},

]);

//GET API
const fetchNotes=()=>{
axios.get('http://localhost:3000/api/notes')
.then((res=>{
 setNotes(res.data.note)
  
}))
}

useEffect(()=>{
  fetchNotes()
},[])


//POST api
const prevent = (e) => {
  e.preventDefault();

  const {title,description}=e.target.elements
  console.log(title.value,description.value)

  axios.post("http://localhost:3000/api/notes",{
     title:title.value,
  description:description.value
  })
  .then(res=>{
    console.log(res.data)
    fetchNotes()
  })
};


//DELETE api
const delNotes=(noteId)=>{
console.log(noteId)
axios.delete("http://localhost:3000/api/notes/"+noteId)
.then(res=>{
  console.log(res.data)
  fetchNotes()
})
}


//PATCH api
const modifyNotes=(noteId)=>{
  const newtitle=prompt("new title")
  const newdesc=prompt("new description")

console.log(noteId)
axios.patch("http://localhost:3000/api/notes/"+noteId, {
  title:newtitle,
  description: newdesc
  })

.then(res=>{
  console.log(res.data)
  fetchNotes()
})
}
  return (
  <>
    <form className='note-create-form' onSubmit={prevent}>
      <input name='title' type="text" placeholder='enter title' />
            <input  name='description' type="text" placeholder='enter description' />
            <button>Create note</button>

    </form>

    <div className='notes'>
      {
        notes.map((note, index) => {
          return (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button  onClick={()=>{delNotes(note._id)}}>Delete Note</button>
              <button  onClick={()=>{modifyNotes(note._id)}}>Modify Note</button>

            </div>
          )
        })
      }
    </div>
  </>
)}

export default App
