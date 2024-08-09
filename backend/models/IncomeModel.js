const mongoose = require('mongoose');

// Define the schema for the Income model
const IncomeSchema = new mongoose.Schema({
    // Title of the income
    title: {
        type: String,         // Type is String
        required: true,       // Title is required
        trim: true,           // Remove any extra whitespace from the beginning and end
        maxLength: 50         // Maximum length is 50 characters
    },
    // Amount of the income
    amount: {
        type: Number,         // Type is Number
        required: true,       // Amount is required
        maxLength: 20,        // Maximum length is 20 characters (Note: This doesn't actually apply to numbers)
        trim: true            // Remove any extra whitespace from the beginning and end (Note: `trim` does not apply to numbers)
    },
    // Type of income (default is "income")
    type: {
        type: String,         // Type is String
        default: "income"    // Default value is "income"
    },
    // Date of the income
    date: {
        type: Date,           // Type is Date
        required: true,       // Date is required
        trim: true            // Remove any extra whitespace from the beginning and end (Note: `trim` does not apply to dates)
    },
    // Category of the income
    category: {
        type: String,         // Type is String
        required: true,       // Category is required
        trim: true            // Remove any extra whitespace from the beginning and end
    },
    // Description of the income
    description: {
        type: String,         // Type is String
        required: true,       // Description is required
        maxLength: 20,        // Maximum length is 20 characters
        trim: true            // Remove any extra whitespace from the beginning and end
    },
}, {timestamps: true}); // Add createdAt and updatedAt timestamps

// Export the Income model based on the IncomeSchema
module.exports = mongoose.model('Income', IncomeSchema);
