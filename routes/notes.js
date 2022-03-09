const notes = require('express').Router(); 
const uniqid = require('uniqid'); 
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/helpers'); 


notes.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))
  )
  .catch((err) => console.log(err))
});


notes.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
        const newNote = {
            title,
            text,
            id: uniqid(),
        };
       readAndAppend(newNote, './db/db.json');

       res.json(newNote); 
   
  })


notes.delete("/api/notes/:id",  (req, res) => {
  const { id } = req.params;
  readFromFile('./db/db.json').then((notes) =>{
      notes = JSON.parse(notes).filter(note => note.id != id); 
      const finalNote = writeToFile('./db/db.json', notes); 
      res.status(200).json(finalNote);
  }
)
.catch((err) => console.log(err)); 
});



module.exports = notes;