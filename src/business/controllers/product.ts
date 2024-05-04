import ProductRepository from "../../persistence/repositories/product.repository";
import Logger from "../logger";
import IHttpResponse from "../../interfaces/IHttpResponse";
import { productTypeGuard } from "../../persistence/dtos/product.dto";

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
                        addDate: new Date(),
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

    // async getAll(): Promise<IHttpResponse> {}

    // async getById(productId: number): Promise<IHttpResponse> {}

    // async update(productId: number, product: JSON): Promise<IHttpResponse> {}

    // logical deletion only ('selled' value on 'status' field)
    // async delete(productId: number): Promise<IHttpResponse> {}
}

export default Product;