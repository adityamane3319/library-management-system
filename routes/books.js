const express = require("express");
const { books } = require("../data/books.json");
const {users} = require("../data/users.json");

const { UserModel, BookModel } = require("../models");
const {getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, deleteBookById} = require('../controllers/book-controller');

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all the list of Books in the system
 * Aaccess: Public
 * Parameter: None
 */
// router.get('/', (req, res) => {
//     res.status(200).json({
//         success: true,
//         data: books
//     })
// })
router.get('/', getAllBooks);

/**
 * Route: /books/:id
 * Method: GET
 * Description: Get books by their id
 * Aaccess: Public
 * Parameter: id
 */
// router.get('/:id', (req, res) => {

//     const {id} = req.params;
//     const book = books.find((each) => each.id === id)

//     if(!book) {
//         return res.status(404).json({
//             success: false,
//             message: `Book Not Found of the ID:- ${id}`
//         })
//     }

//     res.status(200).json({
//         success: true,
//         data: book
//     })
// })
router.get('/:id', getSingleBookById);


/**
 * Route: /books/
 * Method: POST
 * Description: Create/ Register a new book
 * Aaccess: Public
 * Parameter: None
 */
// router.post('/', (req, res) => {
//     // req.body should have the following fields
//     const {id, name, author, genre, publisher, price} = req.body;

//     // Check if all the required fields are present or not
//     if(!id || !name || !author || !genre || !publisher || !price){
//         return res.status(400).json({
//             success: false,
//             message: "Please provide all the reuired fields"
//         })
//     }

//     // Check if the book with the same id already exists or not
//     const book = books.find((each) => each.id === id)
//     if(book) {
//         return res.status(400).json({
//             success: false,
//             message: `Book already exists with the ID:- ${id}`
//         })
//     }

//     // Add the new book to the books array
//     books.push({ id, name, author, genre, publisher, price })

//     res.status(201).json({
//         success: true,
//         message: "Book Added Succesfully",
//         data: { id, name, author, genre, publisher, price}
//     })

// })
router.post('/', addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Update Book by their id
 * Aaccess: Public
 * Parameter: ID
 */
// router.put('/:id', (req, res) => {
//     const {id} = req.params;
//     const {data} = req.body;

//     // if(!data || Object.keys(data).length === 0){
//     //     return res.status(400).json({
//     //         success: false,
//     //         message: "Please provide the data to update"
//     //     })
//     // }

//     // Check if the Book exists
//     const book = books.find((each) => each.id === id)
//     if(!book){
//         return res.status(404).json({
//             success: false,
//             message: `Book Not Found for the ID: ${id}`
//         })
//     }

//     // Update the book with the new data
//     const updatedBook = books.map((each) => {
//         if(each.id === id){
//             return {...book, ...data}
//         }
//         return each;
//     });

//     res.status(200).json({
//         success: true,
//         message: "Book Updated Succesfully!",
//         data: updatedBook
//     })

// })
router.put('/:id', updateBookById);

/**
 * Route: /books/:id
 * Method: DELETE
 * Description: Deleting book by their id
 * Aaccess: Public
 * Parameter: ID
 */
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;

//     // Check if the book exists
//     const book = books.find((each)=> each.id ===id)
//     if(!book) {
//         return res.status(404).json({
//             success: false,
//             message: `Book is Not Found for the ID: ${id}`
//         })
//     }

//     // Delete the book from the books array
//     const updatedBooks = books.filter((each) => each.id !== id)

//     res.status(200).json({
//         success: true,
//         data: updatedBooks,
//         message: "Book Deleted Succesfully"
//     })
// });
router.delete('/:id', deleteBookById);

/**
 * Route: /books/issued/for-users
 * Method: GET
 * Description: Get all the issued books
 * Aaccess: Public
 * Parameter: None
 */
// router.get('/issued/for-users', (req, res) => {
//     // Get all the issued books from the users array
//     // const issuedBooks = books.filter((each) => each.issued === true);
//     const usersWithIssuedBooks = users.filter((each) => {
//         if(each.issuedBook) {
//             return each;
//         }
//     });

//     const issuedBooks = [];

//     usersWithIssuedBooks.forEach((each) => {
//         const book = books.find((book) => book.id === each.issuedBook)

//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;

//         issuedBooks.push(book)
//     })

//     if(!issuedBooks === 0){
//         return res.status(404).json({
//             success: false,
//             message: "No Books Issued Yet"
//         })
//     }

//     res.status(200).json({
//         success: true,
//         data: issuedBooks
//     });
// }); 
router.get('/issued/for-users', getAllIssuedBooks);


module.exports  = router;