const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// an alternative solution to this would be:
// router.get('/', (req, res) => {
//   Category.findAll({
//     include: [Product],
//   })
//     .then((categories) => res.json(categories))
//     .catch((err) => res.status(500).json(err));
// }); 

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Category.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',async  (req, res) => {
  try {
    const number = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(number);
  } catch (err) {
    res.status(400).json(err);
  }
 });

//  as always, another way to write:
// router.put('/:id', (req, res) => {
//   Category.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((category) => res.status(200).json(category))
//     .catch((err) => res.status(400).json(err));
// });

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// another way to write:
// router.delete('/:id', (req, res) => {
//   Category.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((category) => res.status(200).json(category))
//     .catch((err) => res.status(400).json(err));
// });


module.exports = router;