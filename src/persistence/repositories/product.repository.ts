import IRepository from "./iRepository";
import ProductModel from "../models/product.model";
import { ProductDTO } from "../dtos/product.dto";
import sqliteConnection from '../../database/db.ts';
import { Op } from 'sequelize';

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
        const products = await ProductModel.findAll({
            where: {
                [Op.or]: [
                    { status: null },
                    { status: { [Op.not]: 'sold' } }
                ]
            }
        });

        return products;
    }

    public async getById(productId: number): Promise<any | null> {
        const product = await ProductModel.findOne({
            where: {
                id: productId,
                [Op.or]: [
                    { status: null },
                    { status: { [Op.not]: 'sold' } }
                ]
            }
        })

        return product == null ? 'Product has already been sold' : product;
    }

    public async update(productId: number, productData: any | string): Promise<any | null> {
        const product = await ProductModel.findByPk(productId);
        if (product) {
            product.update(productData);
        }
        return product;
    };

    // NOTE: logical deletion only ('sold' value on 'status' field)
    public async delete(productId: number): Promise<number> {
        const product = await ProductModel.findByPk(productId);
        if (product) {
            product.update({ 'status': 'sold' });
        }
        return productId;
    };
}

export default ProductRepository;