import express from "express";
import admin from "firebase-admin";
import bodyParser from "body-parser";
import cors from 'cors';

import serviceAccount from"./config/react-app-patipat-firebase.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

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

async function addBookNew(tmp){
  const bookRef = db.collection('Books').doc();
  const docRef = db.collection('Books').doc(bookRef.id);
  let myData = {
    bookCode: bookRef.id,
    title: tmp.bookTitle,
    description: tmp.description,
    category: tmp.bookCat
  }
  await docRef.set(myData);
  console.log('Book added.');
}

app.post('/api/addBook', (req, res) => {
  const { bookTitle, bookDesc, bookCat, bookStock } = req.body;
  const tmpData = { bookTitle, bookDesc, bookCat, bookStock };
  addBookNew(tmpData);
  res.status(200).json({message: 'บันทึกสำเร็จ'});
});

async function deleteBook(bookCode) {
  const docRef = db.collection('Books').doc(bookCode)
  // .where("bookCode", "=", bookCode);
  await docRef.delete();
  console.log('Book Deleted.');
}

app.delete('/api/deleteBook/:bookCode', (req, res) => {
  const { bookCode } = req.params;
  deleteBook(bookCode);
  res.status(200).json({message: '[INFO] ลบข้อมูลหนังสือสำเร็จ'});
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

app.get('/api/getBooks', async (req, res) => {
  res.set('content-type', 'application/json');
  fetchBook().then((jsonData) => {
    res.send(jsonData);
  }).catch((error) => {
    res.send(error);
  });
})