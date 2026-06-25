const UserModel = require('./user-model');
const BookModel = require('./book-model');

module.exports = {
    UserModel,
    BookModel
}
// This file is used to export the models so that they can be easily imported in other parts of the application.
// It allows for a cleaner and more organized code structure, as all models can be imported from a single file rather than importing each model individually.