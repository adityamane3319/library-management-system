//  Data transfer object for book

class IssuedBook {
    _id;
    name;
    author;
    genre;
    publisher;
    price;
    issuedBy;
    issuedDate;
    returnDate;

    constructor(user) {
        this._id = user.issuedBook_id;
        this.name = user.issuedBook.name;
        this.author = user.issuedBook.author;
        this.genre = user.issuedBook.genre;
        this.publisher = user.issuedBook.publisher;
        this.price = user.issuedBook.price;
        this.issuedBy = user.name;
        this.issuedDate = user.issuedDate;
        this.returnDate = user.returnDate;
    }
}