const IncomeSchema = require("../models/IncomeModel");

// Handler to add a new income
exports.addIncome = async (req, res) => {
    // Destructure the income data from the request body
    const { title, amount, category, description, date } = req.body;

    // Create a new instance of IncomeSchema with the provided data
    const income = IncomeSchema({
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
        // Save the income to the database
        await income.save();
        // Return a success response
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        // Handle any server errors
        res.status(500).json({ message: 'Server Error' });
    }

    // Log the income to the console (for debugging purposes)
    console.log(income);
};

// Handler to get all incomes
exports.getIncomes = async (req, res) => {
    try {
        // Retrieve all incomes from the database and sort by creation date in descending order
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        // Return the list of incomes as a JSON response
        res.status(200).json(incomes);
    } catch (error) {
        // Handle any server errors
        res.status(500).json({ message: 'Server Error' });
    }
};

// Handler to delete an income by ID
exports.deleteIncome = async (req, res) => {
    // Extract the income ID from the request parameters
    const { id } = req.params;

    // Find and delete the income with the given ID
    IncomeSchema.findByIdAndDelete(id)
        .then(() => {
            // Return a success response
            res.status(200).json({ message: 'Income Deleted' });
        })
        .catch(() => {
            // Handle any server errors
            res.status(500).json({ message: 'Server Error' });
        });
};
