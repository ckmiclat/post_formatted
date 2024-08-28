const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('MIDTERMLAB_CHALLENGE'));

app.post('/MIDTERMLAB_CHALLENGE', (req, res) => {
const { name, email, phone, gender, services, message } = req.body;

console.log('Form Data:');
console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);
console.log(`Gender: ${gender}`);
console.log(`Services: ${services}`);
console.log(`Message: ${message}`);

res.send('Thank you for your submission!');
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});