const { Tag } = require('../models');

const tagData = [
    {
        "tagName": "white"
    },
    {
        "tagName": "black"
    },
    {
        "tagName": "yellow"
    },
    {
        "tagName": "blue"
    },
    {
        "tagName": "purple"
    },
    {
        "tagName": "green"
    },
    {
        "tagName": "pink"
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
