const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MongoDB configuration
const uri = "mongodb+srv://harshisona2001:books@cluster0.14eug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();

        // Collections
        const booksCollections = client.db("BookInventory").collection("books");
        const cartCollections  = client.db("BookInventory").collection("cart");

        // Routes for books

        // Add a new book
        app.post('/upload-book', async (req, res) => {
            const data = req.body;
            const result = await booksCollections.insertOne(data);
            res.send(result);
        });

        // Get all books
        app.get('/all-books', async (req, res) => {
            const books = await booksCollections.find().toArray();
            res.send(books);
        });

        // Update book data
        app.patch('/book/:id', async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: updateBookData,
            };

            const options = { upsert: true };
            const result = await booksCollections.updateOne(filter, updateDoc, options);
            res.send(result);
        });

        // Delete a book
        app.delete('/book/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await booksCollections.deleteOne(filter);
            res.send(result);
        });

        // Find books by category
        app.get('/all-books/find', async (req, res) => {
            const query = req.query.category ? { category: req.query.category } : {};
            const result = await booksCollections.find(query).toArray();
            res.send(result);
        });

        // Get a single book by ID
        app.get('/book/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await booksCollections.findOne(filter);
            res.send(result);
        });

        // Routes for cart

    // Add a book to the cart
   app.post('/cart/add', async (req, res) => {
  const { bookId } = req.body;

  if (!bookId) {
    return res.status(400).send({ error: "Book ID is required" });
  }

  const book = await booksCollections.findOne({ _id: new ObjectId(bookId) });
  if (!book) {
    return res.status(404).send({ error: "Book not found" });
  }

  const existingCartItem = await cartCollections.findOne({ bookId: new ObjectId(bookId) });
  if (existingCartItem) {
    return res.status(400).send({ error: "Book is already in the cart" });
  }

  const cartItem = {
    bookId: new ObjectId(bookId),
    title: book.bookTitle,
    author: book.authorName,
    imageUrl: book.imageUrl,
  };

  const result = await cartCollections.insertOne(cartItem);
  res.send(result);
});


        // Get all items in the cart
        app.get('/cart', async (req, res) => {
            const cartItems = await cartCollections.find().toArray();
            res.send(cartItems);
        });

  // DELETE endpoint to remove an item from the cart
app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await cartCollections.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 1) {
        res.status(200).send({ message: "Item removed from cart successfully" });
      } else {
        res.status(404).send({ error: "Item not found in cart" });
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      res.status(500).send({ error: "Internal server error" });
    }
  });

 // Search for books
 app.get('/search', async (req, res) => {
    const { query } = req.query; // Extract query from request

    if (!query) {
        return res.status(400).send({ error: "Search query is required" });
    }

    try {
        const books = await booksCollections.find({
            $or: [
                { bookTitle: { $regex: query, $options: "i" } },
                { authorName: { $regex: query, $options: "i" } }
            ]
        }).toArray();

        res.send(books); // Respond with the matching books
    } catch (error) {
        console.error("Error searching books:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});

} catch (error) {
console.error("Error in run function:", error);
}
}

//         // Confirm connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Optional: Keep the client open
//     }
// }

// Start the server
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server started successfully at PORT: ${port}`);
});







// const express = require('express');
// const app = express();
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// const port = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // MongoDB configuration
// const uri = "mongodb+srv://harshisona2001:books@cluster0.14eug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect to MongoDB
//         await client.connect();

//         // Collections
//         const booksCollections = client.db("BookInventory").collection("books");
//         const cartCollections = client.db("BookInventory").collection("cart");

//         // Routes for books

//         // Add a new book
//         app.post('/upload-book', async (req, res) => {
//             const data = req.body;
//             const result = await booksCollections.insertOne(data);
//             res.send(result);
//         });

//         // Get all books
//         app.get('/all-books', async (req, res) => {
//             const books = await booksCollections.find().toArray();
//             res.send(books);
//         });

//         // Update book data
//         app.patch('/book/:id', async (req, res) => {
//             const id = req.params.id;
//             const updateBookData = req.body;
//             const filter = { _id: new ObjectId(id) };
//             const updateDoc = {
//                 $set: updateBookData,
//             };

//             const options = { upsert: true };
//             const result = await booksCollections.updateOne(filter, updateDoc, options);
//             res.send(result);
//         });

//         // Delete a book
//         app.delete('/book/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await booksCollections.deleteOne(filter);
//             res.send(result);
//         });

//         // Find books by category
//         app.get('/all-books/find', async (req, res) => {
//             const query = req.query.category ? { category: req.query.category } : {};
//             const result = await booksCollections.find(query).toArray();
//             res.send(result);
//         });

//         // Get a single book by ID
//         app.get('/book/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await booksCollections.findOne(filter);
//             res.send(result);
//         });

//         // Routes for cart

//         // Add a book to the cart
//         app.post('/cart/add', async (req, res) => {
//             const { bookId } = req.body;

//             if (!bookId) {
//                 return res.status(400).send({ error: "Book ID is required" });
//             }

//             const book = await booksCollections.findOne({ _id: new ObjectId(bookId) });
//             if (!book) {
//                 return res.status(404).send({ error: "Book not found" });
//             }

//             const existingCartItem = await cartCollections.findOne({ bookId: new ObjectId(bookId) });
//             if (existingCartItem) {
//                 return res.status(400).send({ error: "Book is already in the cart" });
//             }

//             const cartItem = {
//                 bookId: new ObjectId(bookId),
//                 title: book.bookTitle,
//                 author: book.authorName,
//                 imageUrl: book.imageUrl,
//             };

//             const result = await cartCollections.insertOne(cartItem);
//             res.send(result);
//         });

//         // Get all items in the cart
//         app.get('/cart', async (req, res) => {
//             const cartItems = await cartCollections.find().toArray();
//             res.send(cartItems);
//         });

//         // Remove a book from the cart
//         app.delete('/cart/remove/:id', async (req, res) => {
//             const id = req.params.id;

//             if (!ObjectId.isValid(id)) {
//                 return res.status(400).send({ error: "Invalid ID format" });
//             }

//             const result = await cartCollections.deleteOne({ _id: new ObjectId(id) });
//             if (result.deletedCount === 0) {
//                 return res.status(404).send({ error: "Cart item not found" });
//             }

//             res.send(result);
//         });

//         // Confirm connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Optional: Keep the client open
//     }
// }

// // Start the server
// run().catch(console.dir);

// app.listen(port, () => {
//     console.log(`Server started successfully at PORT: ${port}`);
// });
