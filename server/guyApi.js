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

  async function addBookNew(tmp) {
    const bookRef = db.collection('Books').doc();
    const docRef = db.collection('Books').doc(bookRef.id);
    let myData = {
      bookCode: bookRef.id,
      bookTitle: tmp.bookTitle,
      bookDescription: tmp.bookDesc,  // Changed to match req.body
      bookCategory: tmp.bookCat
    };
    await docRef.set(myData);
    console.log('Book added.');
  }

  app.post('/api/addBook', async (req, res) => {
    const { bookTitle, bookDesc, bookCat, bookStock } = req.body;
    const tmpData = { bookTitle, bookDesc, bookCat, bookStock };
    try {
      await addBookNew(tmpData);
      res.status(200).json({ message: 'บันทึกสำเร็จ' });
    } catch (error) {
      res.status(500).json({ message: 'Error adding book', error });
    }
  });

  async function deleteBook(bookCode) {
    const docRef = db.collection('Books').doc(bookCode)
    // .where("bookCode", "=", bookCode);
    await docRef.delete();
    console.log('Book Deleted.');
  }

  app.delete('/api/deleteBook/:bookCode', async (req, res) => {
    const { bookCode } = req.params;
    try {
      await deleteBook(bookCode);
      res.status(200).json({ message: '[INFO] ลบข้อมูลหนังสือสำเร็จ' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error });
    }
  });

  async function fetchBook() {
    const result = [];
    const booksRef = db.collection('Books');
    const docRef = await booksRef.get();
    docRef.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return JSON.stringify(result);
  }
  
  app.get('/api/getBooks', async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    try {
      const books = await fetchBook(limit);
      res.set('content-type', 'application/json');
      res.send(books);
    } catch (error) {
      res.status(500).send(error);
    }
  });

   async function fetchBookById(bookId) {
    const result = [];
    const booksRef = db.collection('Books').where('bookCode', '=', bookId);
    const docRef = await booksRef.get();
    docRef.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return result
  }

  // http://localhost:3000/api/getBookById

  app.get('/api/getBookById/:bookId', (req, res) => {
    const { bookId } = req.params;
    res.set('content-type', 'application/json');
    fetchBookById(bookId).then((jsonData) =>{
      res.send(jsonData[0]);
    }).catch((error) => {
      res.send(error);
    })
  });

  async function updataBook(bookId, bookData) {
    const docRef = db.collection('Books').doc(bookId);
    await docRef.update(bookData);
    console.log('Book Updated');
  }

  // http:localhost:3000/api/updateBook
  app.post('/api/updateBook', (req, res) => {
    const { bookId, bookTitle, bookDescription, bookCategory } = req.body;
    updataBook(bookId, { bookTitle, bookDescription, bookCategory });
    res.status(200).json({message: '[INFO] Book updata successfully.'});
  })

