const router    =   require('express').Router();
const wordController    =   require('./controllers/wordController');
const productController = require('./controllers/productController')

router.get('/', (req, res) => res.json({data: 'Hello Router'}));
router.post('/words', (req, res) => res.json({data: 'Hello Router'}));
router.post('/complexity', wordController.getComplexity);
router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProduct);
router.get('/products/:id', productController.getSingleProduct);
router.put('/products/:id', productController.getUpdateById);
router.delete('/products/:id', productController.deletePorduct);

module.exports = router;