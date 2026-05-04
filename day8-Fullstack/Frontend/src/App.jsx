import {  use, useState } from 'react'


import React from 'react'
import axios from 'axios'

const App = () => {

const [notes, setNotes] = useState([
  {
  title:"test title",
  description:"test description",
},

]);

axios.get('http://localhost:3000/api/notes')
.then((res=>{
 setNotes(res.data.note)
  
}))
  return (
    <div className='notes'>
     {
      notes.map(note=>{
        return  <div className="note">
          <h1>{note.title}</h1>
        <p>{note.description}</p> <br />
      </div>
      })
     }
     
    
    </div>
  )
}

export default App
