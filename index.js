const { application } = require('express');
let express = require('express');
let app = express();
let cors = require('cors');

app.use(express.static('public'));
app.use(cors({optionSuccessStatus: 200}));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  console.log(req);
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
})

app.listen(3000, () => {
  console.log('started server on port 3000')
});