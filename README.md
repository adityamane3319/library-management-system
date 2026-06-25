# library-management-system
    
    This is a Library Management API Backend for the management of users and the books

# Routes and the Endpoints

## /users
GET: Get all the list of users in the system
POST: Create/Register a new users

## /users/{id}
GET: Get a user by their ID
PUT: Updating a user by the ID
DELETE: Deleting a user by their ID (Check if the user still has an issued book) && {is there any fine/penalty to be collected}

## /users/subscriptions-details/{id}
GET: Get a user subscription details by their ID
    >> Date of subscription
    >> Valid till?
    >> Fine if any?



## /books
GET: Get all the books in the system
POST: Add a new book to the system

## /books/{id}
GET: Get a book nby their ID
PUT: Update a book by its ID
DELETE: Delete a book by its ID

## /books/issued
GET: Get all the issued books

## /books/issued/withFine
GET: Get all issued books with their fine amount


### Subscription Types
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

>> If a user missed the renewal date, then user should be collected with $100
>> If a user misses his subscription, then user is expected to pay $100
>> If a user misses both renewal & subscription, then the collected amount should be $200


## Commands:
npm init
npm i express
npm i nodemon --save-dev

npm run dev ---> To start the Application.


## Commands: MongoDB
npm i mongoose


mongodb://adityamane3319_db_user:Ubk0Csf9iWzjcAv3@ac-0dlamob-shard-00-00.xgoppca.mongodb.net:27017,ac-0dlamob-shard-00-01.xgoppca.mongodb.net:27017,ac-0dlamob-shard-00-02.xgoppca.mongodb.net:27017/?ssl=true&replicaSet=atlas-d6q15l-shard-0&authSource=admin&appName=Cluster0


npm i dotenv

## MVC Architecture
    >> M: Model (Structure of our MongoDB Collection)
    >> V: View (FrontEnd)
    >> C: Controllers (Brain / Logic of your Route)


