const mongoose = require('mongoose');

// Define the schema for the Expense model
const ExpenseSchema = new mongoose.Schema({
    // Title of the expense
    title: {
        type: String,         // Type is String
        required: true,       // Title is required
        trim: true,           // Remove any extra whitespace from the beginning and end
        maxLength: 50         // Maximum length is 50 characters
    },
    // Amount of the expense
    amount: {
        type: Number,         // Type is Number
        required: true,       // Amount is required
        maxLength: 20,        // Maximum length is 20 characters (Note: This doesn't actually apply to numbers)
        trim: true            // Remove any extra whitespace from the beginning and end (Note: `trim` does not apply to numbers)
    },
    // Type of expense (default is "expense")
    type: {
        type: String,         // Type is String
        default: "expense"   // Default value is "expense"
    },
    // Date of the expense
    date: {
        type: Date,           // Type is Date
        required: true,       // Date is required
        trim: true            // Remove any extra whitespace from the beginning and end (Note: `trim` does not apply to dates)
    },
    // Category of the expense
    category: {
        type: String,         // Type is String
        required: true,       // Category is required
        trim: true            // Remove any extra whitespace from the beginning and end
    },
    // Description of the expense
    description: {
        type: String,         // Type is String
        required: true,       // Description is required
        maxLength: 20,        // Maximum length is 20 characters
        trim: true            // Remove any extra whitespace from the beginning and end
    },
}, {timestamps: true}); // Add createdAt and updatedAt timestamps

// Export the Expense model based on the ExpenseSchema
module.exports = mongoose.model('Expense', ExpenseSchema);
