// Importing required functions from controllers
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

// Importing express and creating a new router instance
const router = require('express').Router();

// Route for adding income
// This will handle POST requests to '/add-income' and call the addIncome function from the income controller
router.post('/add-income', addIncome);

// Route for getting all incomes
// This will handle GET requests to '/get-incomes' and call the getIncomes function from the income controller
router.get('/get-incomes', getIncomes);

// Route for deleting an income by ID
// This will handle DELETE requests to '/delete-income/:id', where ':id' is a placeholder for the income ID, and call the deleteIncome function from the income controller
router.delete('/delete-income/:id', deleteIncome);

// Route for adding an expense
// This will handle POST requests to '/add-expense' and call the addExpense function from the expense controller
router.post('/add-expense', addExpense);

// Route for getting all expenses
// This will handle GET requests to '/get-expenses' and call the getExpense function from the expense controller
router.get('/get-expenses', getExpense);

// Route for deleting an expense by ID
// This will handle DELETE requests to '/delete-expense/:id', where ':id' is a placeholder for the expense ID, and call the deleteExpense function from the expense controller
router.delete('/delete-expense/:id', deleteExpense);

// Exporting the router to use in other parts of the application
module.exports = router;
