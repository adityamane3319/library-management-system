const express = require("express");
const { users } = require("../data/users.json");
const {getAllUsers, getSingleUserById, createUser, updateUserById, deleteUserById, getSubscriptionDetailsById} = require("../controllers/user-controller")

const router = express.Router();


/**
 * Route: /users
 * Method: GET
 * Description: Get all the list of users in the system
 * Aaccess: Public
 * Parameter: None
 */
// router.get('/', (req, res) => {
//     res.status(200).json({
//         success: true,
//         data: users
//     })
// })
router.get('/', getAllUsers);

/**
 * Route: /users/:id
 * Method: GET
 * Description: Get user by their id
 * Aaccess: Public
 * Parameter: id
 */
// router.get('/:id', (req, res) => {

//     const { id } = req.params;
//     const user = users.find((each) => each.id === id)

//     if (!user) {
//         return res.status(404).json({
//             success: false,
//             message: `User Not Found of the ID:- ${id}`
//         })
//     }

//     res.status(200).json({
//         success: true,
//         data: user
//     })
// })
router.get('/:id', getSingleUserById);

/**
 * Route: /users/
 * Method: POST
 * Description: Create/ Register a new userr
 * Aaccess: Public
 * Parameter: None
 */
// router.post('/', (req, res) => {
//     // req.body should have the following fields
//     const { id, name, email, surname, subscriptionType, subscriptionDate } = req.body;

//     // Check if all the required fields are present or not
//     if (!id || !name || !surname || !email || !subscriptionType || !subscriptionDate) {
//         return res.status(400).json({
//             success: false,
//             message: "Please provide all the reuired fields"
//         })
//     }

//     // Check if the user with the same id already exists or not
//     const user = users.find((each) => each.id === id)
//     if (user) {
//         return res.status(409).json({
//             success: false,
//             message: `User Already Exists with ID: ${id}`
//         })
//     }

//     // If all the checks are successful, then we can create a new user and push it to the users array
//     users.push({ id, name, surname, email, subscriptionType, subscriptionDate })

//     res.status(201).json({
//         success: true,
//         message: "User Created Succesfully"
//     })

// })
router.post('/', createUser);

/**
 * Route: /users/:id
 * Method: PUT
 * Description: Update user by their id
 * Aaccess: Public
 * Parameter: ID
 */
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { data } = req.body;

//     // Check if the user exists
//     const user = users.find((each) => each.id === id)
//     if (!user) {
//         return res.status(404).json({
//             success: false,
//             message: `User Not Found for the ID: ${id}`
//         })
//     }

//     // If user exists, update the user data
//     // With spread Operator
//     const updatedUser = users.map((each) => {
//         if (each.id === id) {
//             return {
//                 ...each,
//                 ...data,
//             }
//         }
//         return each
//     })

//     res.status(200).json({
//         success: true,
//         data: updatedUser,
//         message: "User Updated Succesfully!"
//     })

// })
router.put('/:id', updateUserById);

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Deleting user by their id
 * Aaccess: Public
 * Parameter: ID
 */
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;

//     // Check if the user exists
//     const user = users.find((each) => each.id === id)
//     if (!user) {
//         return res.status(404).json({
//             success: false,
//             message: `User is Not Found for the ID: ${id}`
//         })
//     }

//     // If the user exists, filter it out from the user array
//     const updatedUsers = users.filter((each) => each.id !== id)

//     res.status(200).json({
//         success: true,
//         data: updatedUsers,
//         message: "User Deleted Succesfully"
//     })
// });
router.delete('/:id', deleteUserById);


/**
 * Route: /users/subscription-details/for-users
 * Method: GET
 * Description: Get all the subscription details for a user by their ID
 * Aaccess: Public
 * Parameter: ID
 */
// router.get('/subscription-details/:id', (req, res) => {
//     const { id } = req.params;

//     // Find the user by ID
//     const user = users.find((each) => each.id === id);
//     if (!user) {
//         return res.status(404).json({
//             success: false,
//             message: `User Not Found for ID: ${id}`
//         });
//     }

//     // Extract the subscription details
//     const getDateInDays = (data = '') => {
//         let date;
//         if (data) {
//             date = new Date(data);
//         } else {
//             date = new Date();
//         }
//         let days = Math.floor(date / (1000 * 60 * 60 * 24));
//         return days;
//     }

//     const subscriptionType = (date) => {
//         if (user.subscriptionType === "Basic") {
//             date = date + 90
//         } else if (user.subscriptionType === "Standard") {
//             date = date + 180
//         } else if (user.subscriptionType === "Premium") {
//             date = date + 365
//         }
//         return date;
//     }

//     // Subscriptions Expiration Calculation 
//     //  January 1, 1970 UTC // miliseconds

//     let returnDate = getDateInDays(user.returnDate);
//     let currentDate = getDateInDays();
//     let subscriptionDate = getDateInDays(user.subscriptionDate);
//     let subscriptionExpiration = subscriptionType(subscriptionDate);

//     const data = {
//         ...user,
//         subscriptionExpired: subscriptionExpiration < currentDate,
//         subscriptionDaysLeft: subscriptionExpiration - currentDate,
//         daysLeftForExpiration: returnDate - currentDate,
//         returnDate: returnDate < currentDate ? "Book is Overdue" : returnDate,
//         fine: returnDate < currentDate ? subscriptionExpiration <= currentDate ? 200 : 100 : 0
//     }


//     res.status(200).json({
//         success: true,
//         data
//     })
// })
router.get('/subscription-details/:id', getSubscriptionDetailsById);

module.exports = router;