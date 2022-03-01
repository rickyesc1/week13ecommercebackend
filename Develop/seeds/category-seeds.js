const { Category } = require('../models');

const categoryData = [
    {
        "categoryName": "Shirt"
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
