import express from "express";
import admin from "firebase-admin";

import serviceAccount from"./config/react-app-patipat-firebase.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});

function addBook(){
  const bookRef = db.collection('Books').doc();
  const docRef = db.collection('Books').doc(bookRef.id);
  docRef.set({
    id: 'B104',
    title: "title B104",
    description: "description B104",
    category: 10,
    author: "author B104",
    price: 179,
    publisher: 'publisher B104',
    stock: true
  });
  console.log('Book added.');
}

app.get('/addBook', (req, res) => {
  addBook();
  res.end('added new book.');
});

async function fetchBook(){
  const result =[];
  const booksRef = db.collection('Books');
  const docRef = await booksRef.get();
  docRef.forEach(doc =>{
    result.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return JSON.stringify(result);
}

app.get('/getBooks', async (req, res) => {
  res.set('content-type', 'application/json');
  fetchBook().then((jsonData) => {
    res.send(jsonData);
  }).catch((error) => {
    res.send(error);
  });
})