import IRepository from "./iRepository";
import ProductModel from "../models/product.model";

class ProductRepository implements IRepository {
    public async create(productData: any | string): Promise<any> {
        return await ProductModel.create({productData});
    }

    public async getAll(): Promise<any | null> {
        return await ProductModel.findAll();
    }

    public async getById(productId: number): Promise<any | null> {
        return await ProductModel.findByPk(productId);
    }

    public async update(productId: number, productData: any | string): Promise<any | null> {
        const product = await ProductModel.findByPk(productId);
        if (product) {
            product.update(productData);
        }
        return product;
    };

    public async delete(productId: number): Promise<number> {
        return await ProductModel.destroy({ where: { id: productId } });
    };
}

export default ProductRepository;