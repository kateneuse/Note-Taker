const express = require('express'); 
const path = require('./routes/paths');
const note = require('./routes/notes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(note);
app.use(path); 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);