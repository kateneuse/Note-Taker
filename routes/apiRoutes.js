const router = require('express').Router();

const data = require('../Develop/db/db.json');

// get request
router.get('/notes', function (req, res) {
    data
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));

});
// post request
router.post('/notes', (req, res) => {
    data
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err = res.status(500).json(err));
});

module.exports = router;