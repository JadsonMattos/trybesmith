import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';
import validateParams from '../middlewares/productValidation.middleware';
import { Product } from '../types/Product';
import { ResponseService } from '../types/ResponseService';

async function create(product: ProductInputtableTypes): Promise<ResponseService<Product>> {
  let responseService: ResponseService<Product>;

  const error = validateParams(product);

  if (error) {
    responseService = { status: error.status, data: { message: error.data } };
    return responseService;
  } 
  const newProduct = await ProductModel.create(product);
  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };
  return responseService;
}

async function getAll(): Promise<ResponseService<Product[]>> {
  const products = await ProductModel.findAll();
  const responseService: ResponseService<Product[]> = {
    status: 'SUCCESSFUL', data: products.map((product) => product.dataValues),
  };
  return responseService;
}

export default {
  create,
  getAll,
};