const { Product } = require('../models');

const productData = [
    {
        "productName": "Nike",
        "price": 45.00,
        "stock": 15,
        "categoryId": 1,
        "tagIds": [1,2,3,4]
  
      }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
