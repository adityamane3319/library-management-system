const {BookModel, UserModel} = require('../models');
const IssuedBook = require('../dtos/book-dto');

exports.getAllBooks = async(req, res) => {
    const books = await BookModel.find()

    if(books.length === 0){
        return res.Status.json({
            success: false,
            message: "No Books in the System"
        })
    }

    res.status(200).json({
        success: true,
        data: books
    })
};


exports.getSingleBookById = async(req, res) => {
    const {id} = req.params;
    const book = await BookModel.findById(id)

    if(!book) {
        return res.status(404).json({
            success: false,
            message: `Book Not Found for the ID: ${id}`
        })
    }

    res.status(200).json({
        success: true,
        data: book
    })
};


exports.getAllIssuedBooks = async(req, res) => {
    const users = await userModel.find({
        issuedBook: {$exists: true}
    }).populate("issuedBook")

    const issuedBooks = users.map((each) => {
        return new IssuedBook(each);
    });

    if(issuedBooks.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Books Issued Yet"
        })
    }

    res.status(200).json({
        success: true,
        data: issuedBooks
    });
};


exports.addNewBook = async(req, res) => {
    const {data} = req.body;

    if(!data || Object.keys(data).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide the data to add a new book"
        })
    }

    await BookModel.create(data);

    const allBooks = await BookModel.find();
    res.status(200).json({
        success: true,
        message: "Books added successfully",
        data: allBooks
    });
};


exports.updateBookById = async(req, res) => {
    const { id } = req.params;
    const data = req.body;

    console.log("BODY:", req.body);

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide the data to update"
        });
    }

    const updatedBook = await BookModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    );

    if (!updatedBook) {
        return res.status(404).json({
            success: false,
            message: `Book Not Found for the ID: ${id}`
        });
    }

    res.status(200).json({
        success: true,
        message: "Book Updated Successfully!",
        data: updatedBook
    });
};


exports.deleteBookById = async(req, res) => {
    const {id} = req.params;

    // Check if the Book exists
    const book = await BookModel.findById(id);
    if(!book) {
        return res.status(404).json({
            success: false,
            message: `Book Not Found for the ID: ${id}`
        })
    }

    await BookModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Book Deleted Successfully"
    })
};

// exports.deleteBookById = async (req, res) => {
//     try {
//         const { id } = req.params;

//         console.log("Trying to delete:", id);

//         const book = await BookModel.findById(id);
//         console.log("Found book:", book);

//         if (!book) {
//             return res.status(404).json({
//                 success: false,
//                 message: `Book Not Found for the ID: ${id}`
//             });
//         }

//         const deleted = await BookModel.findByIdAndDelete(id);

//         console.log("Deleted:", deleted);

//         return res.status(200).json({
//             success: true,
//             message: "Book Deleted Successfully",
//             data: deleted
//         });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: "Server Error"
//         });
//     }
// };