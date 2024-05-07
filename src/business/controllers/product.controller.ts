import ProductRepository from "../../persistence/repositories/product.repository";
import Logger from "../logger";
import IHttpResponse from "../../interfaces/IHttpResponse";
import { productTypeGuard, checkIfObjHasLegalKeys, checkIfLegalKeysAreCorrectType } from "../../persistence/dtos/product.dto";

class Product {
    private productRepository: ProductRepository = new ProductRepository();
    private logger = Logger.getLogger();

    async create(product: JSON): Promise<IHttpResponse> {
        try {
            if (productTypeGuard(product)) {
                for (let i = 0; i <= product.quantity; i++) {
                    await this.productRepository.create({
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        cost: product.cost,
                        addDate: new Date().toString(),
                        updateDate: null,
                        supplier: product.supplier,
                        description: product.description,
                        measure: product.measure,
                        eanCode: product.eanCode,
                        skuCode: product.skuCode,
                        weight: product.weight,
                        orderDate: product.orderDate,
                        deliveryDate: product.deliveryDate,
                        status: 'available'
                    });
                }

                return {
                    message: `Product created successfully`,
                    date: new Date(),
                    status: 200
                }
            }
        }
        catch (error) {
            if (error.name === "SequelizeDatabaseError") {
                return {
                    message: `${error.errors[0].type} - ${error.errors[0].message} (${error.errors[0].value})`,
                    date: new Date(),
                    status: 500
                };
            }
            else {
                return {
                    message: error.message,
                    date: new Date(),
                    status: 500
                };
            }
        }

    }

    async getAll(): Promise<IHttpResponse> {
        try {
            const products = JSON.stringify(await this.productRepository.getAll());
            const response: IHttpResponse = {
                message: JSON.parse(products),
                date: new Date(),
                status: 200
            };
            this.logger.info(response);
            return response;
        }
        catch (error) {
            const response: IHttpResponse = {
                message: `Could not get products data\n ERROR: ${error}`,
                date: new Date(),
                status: 500
            };

            this.logger.error(response);
            return response;
        }
    }

    async getById(productId: number): Promise<IHttpResponse> {
        try {
            const product = JSON.stringify(await this.productRepository.getById(productId));
            const response: IHttpResponse = {
                message: JSON.parse(product),
                date: new Date(),
                status: 200
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not get product ${productId}`,
                date: new Date(),
                status: 500
            };

            this.logger.info(response);
            return response;
        }
    }

    async update(productId: number, product: JSON): Promise<IHttpResponse> {
        try {
            if (checkIfObjHasLegalKeys(productId)) {
                if (checkIfLegalKeysAreCorrectType(productId)) {
                    this.productRepository.update(productId, product);
                    return {
                        message: 'Product updated',
                        date: new Date(),
                        status: 200
                    }                        
                }
            }
        } catch (error) {
            const response: IHttpResponse = {
                message: error.message,
                date: new Date(),
                status: 400
            };

            this.logger.error(response);
            return response;
        }
    }

    async delete(productId: number): Promise<IHttpResponse> {
        try {
            JSON.stringify(await this.productRepository.delete(productId));
            const response: IHttpResponse = {
                message: `Product ${productId} sold successfully`,
                date: new Date(),
                status: 200
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `could not delete product ${productId}`,
                date: new Date(),
                status: 500
            }

            this.logger.error(response);
            return response;
        }
    }
}

export default Product;