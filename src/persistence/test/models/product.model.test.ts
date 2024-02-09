import ProductModel from "../../models/product.model";
import ProductMockData from "../data-mocks/product.data.mock.json";

test('create_new_product', async () => {
    jest.clearAllMocks();

    ProductModel.create = jest.fn().mockResolvedValue(ProductMockData);

    const newProduct = await ProductModel.create(ProductMockData);

    expect(ProductModel.create).toHaveBeenCalledWith(ProductMockData);
    expect(newProduct.id).toBe(2);
    expect(newProduct.name).toBe('Product Name');
    expect(newProduct.category).toBe('Electronics');
});