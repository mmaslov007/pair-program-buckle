const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {message: null});
});

app.post('/', (req, res) => {
    if (req.body.number) {
        let number = req.body.number;
        res.render('home', { message: (message = buckleConverter(number))});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});

function buckleConverter(number, message) {
    if (number == 1 || number == 2) {
        message = "buckle my shoe.";
    } else if (number == 3 || number == 4) {
        message = "shut the door.";
    } else if (number == 5 || number == 6) {
        message = "pick up sticks.";
    } else if (number == 7 || number == 8) {
        message = "lay them straight.";
    } else if (number == 9 || number == 10) {
        message = "a big fat hen!";
    } else {
        message = "Please enter a number between 1 and 10";
    }
    return message;
}