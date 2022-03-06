const note = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, readAndRemove } = require('../helpers/helpers')

note.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data)))
);

note.post('/', (req, res) => {
    const { title, text } = req.body
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
            };

            readAndAppend(newNote, './db/db.json')

            const response = {
                status: 'Success',
                body: newNote,
            };
            res.json(response)
        } else {
            res.json('Please enter a title and body text for your note.')
        }
})

note.delete('/:id', (req, res) => {
    const removeId = req.params.id;
    if (removeId) {
        readAndRemove(removeId, './db/db.json');

        const response = {
            status: 'Success',
            body: `Removing note ID# ${removeId}`
        };
        res.json(response)
    } else {
        res.json('An error occured.')
    }
})

module.exports = note;