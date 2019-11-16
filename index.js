const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//new additions
//const User = require('./User');
const mongoose = require('mongoose');
const db = require('./config').db;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Databse connected successfully ${db}`))
    .catch(err => console.log(err));
const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Welcome to Week 3!' });;
});

// app.get('/userCheck', async (req, res) => {
//     await User.findOne({ username: req.query.username }).then(user => {
//         if (user) {
//             return res.status(200).send('Username Exists');
//         }
//         else {
//             return res.status(404).send('Username Not Found');
//         }
//     });
// });

// app.post('/enterUser', async (req, res) => {
//     let { username, password } = req.body;
//     await User.findOne({ username: req.body.username }).then(user => {
//         if (user) {
//             return res.status(401).send('Username exists, try something else');
//         }
//         else {
//             let newUser = new User({
//                 username,
//                 password
//             });
//             newUser.save((err, usr) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else if (usr) {
//                     return res.status(201).send("Data entry successful");
//                 }
//             });
//         }
//     });
// });



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});




