const ExpenseSchema = require("../models/ExpenseModel");

// Handler to add a new expense
exports.addExpense = async (req, res) => {
    // Destructure the expense data from the request body
    const { title, amount, category, description, date } = req.body;

    // Create a new instance of ExpenseSchema with the provided data
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Validation checks
        if (!title || !category || !description || !date) {
            // If any required field is missing, return a 400 Bad Request response
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0 || typeof amount !== 'number') {
            // If amount is not a positive number, return a 400 Bad Request response
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }
        // Save the expense to the database
        await expense.save();
        // Return a success response
        res.status(200).json({ message: 'Expense Added' });
    } catch (error) {
        // Handle any server errors
        res.status(500).json({ message: 'Server Error' });
    }

    // Log the expense to the console (for debugging purposes)
    console.log(expense);
};

// Handler to get all expenses
exports.getExpense = async (req, res) => {
    try {
        // Retrieve all expenses from the database and sort by creation date in descending order
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        // Return the list of expenses as a JSON response
        res.status(200).json(expenses);
    } catch (error) {
        // Handle any server errors
        res.status(500).json({ message: 'Server Error' });
    }
};

// Handler to delete an expense by ID
exports.deleteExpense = async (req, res) => {
    // Extract the expense ID from the request parameters
    const { id } = req.params;

    // Find and delete the expense with the given ID
    ExpenseSchema.findByIdAndDelete(id)
        .then(() => {
            // Return a success response
            res.status(200).json({ message: 'Expense Deleted' });
        })
        .catch(() => {
            // Handle any server errors
            res.status(500).json({ message: 'Server Error' });
        });
};
