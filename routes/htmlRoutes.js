const path = require('path');
const router = require('express').Router();

//GET notes returns to notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


router.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//send to homepage if no matching route is found
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;