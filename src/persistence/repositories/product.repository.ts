import IRepository from "./iRepository";
import ProductModel from "../models/product.model";
import { ProductDTO } from "../dtos/product.dto";

class ProductRepository implements IRepository {
    public async create(productData: any | string): Promise<Object> {
        let product: ProductDTO = productData;  
        return await ProductModel.create({
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