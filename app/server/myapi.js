import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

// http://localhost:3000/ 
app.get('/', (req, res) => {
    res.send('Hi, Im Guy');
});

// http://localhost:3000/api/myProfile
app.get('/api/myProfile', (req, res) => {
    let myHtml= '<h1>My Profile</h1>';
    myHtml+="<p>Name: Guy</p>"
    myHtml+="<p>Email: patipat.cha@rmutto.ac.th</p>"
    res.set(`Content-Type`, 'text/html');
    res.end(myHtml);
});

// http://localhost:3000/api/getProfile/u100/o200
app.get('/api/getProfile/:userId/:orderId', (req, res) => {
    res.send(req.params);
});

// http://localhost:3000/api/getProfile
app.get('/api/getProfile', (req, res) => {
    let myProf = {
        '_id': 1000,
        'img': 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru-1.jpg',
        'fname': 'patipat',
        'lname': 'chanseetid',
        'major': 'IT'
    };
    res.jsonp(myProf);
});


app.listen(port, () => {
    console.log(`Example port ${port}`);
});