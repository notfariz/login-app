const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'test@example.com' && password === '123456') {
        res.status(200).json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(5000, '0.0.0.0', () => {
    console.log('Server running on http://localhost:5000');
});