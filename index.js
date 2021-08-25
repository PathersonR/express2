import express from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/users.js';
import studentsRouters from './routes/students.js';
const app = express();
const PORT = 3000;
console.log('starting app...');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}))
app.use( bodyParser.json());
app.get('/', (req, res) => {  // localhost:3000/
    const context = {"msg":"Welcome Home message",
                    "name": "Karl Larson"};
    res.render('home');
});
app.use('/users', usersRouters)
app.use('/students', studentsRouters)
app.listen( PORT, () => {
    console.log('server running on port ' + PORT);
});

