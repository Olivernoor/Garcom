import express, { Router } from 'express';
import productController from '../../controllers/product/productController';

const productRouter: Router = express.Router();

productRouter.post('/products', productController.createProduct);


productRouter.get('/products', productController.getAllProducts);


productRouter.get('/products/:id', productController.getProductById);


productRouter.put('/products/:id', productController.updateProduct);


productRouter.delete('/products/:id', productController.deleteProduct);

export default productRouter;