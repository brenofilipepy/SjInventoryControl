interface ProductDTO {
    id: number;
    name: string;
    category: string;
    price: number;
    cost: number;
    addDate: string;
    updateDate: string;
    supplier: string;
    description: string;
    measure: string;
    eanCode: number;
    skuCode: string;
    weight: string;
    orderDate: string;
    deliveryDate: string;
    status: string;
    quantity: number;
};

function productTypeGuard(obj: any): obj is ProductDTO {
    const isNameString = typeof obj.name === 'string';
    const isCategoryString = typeof obj.category === 'string';
    const isPriceNumber = typeof obj.price === 'number';
    const isCostNumber = typeof obj.cost === 'number';
    const isSupplierString = typeof obj.supplier === 'string';
    const isDescriptionString = typeof obj.description === 'string';
    const isMeasureString = typeof obj.measure === 'string';
    const isEanCodeNumber = typeof obj.eanCode === 'number';
    const isSkuCodeString = typeof obj.skuCode === 'string';
    const isWeightString = typeof obj.weight === 'string';
    const isOrderDateString = typeof obj.orderDate === 'string';
    const isDeliveryDateString = typeof obj.deliveryDate === 'string';

    if (
        isNameString &&
        isCategoryString &&
        isPriceNumber &&
        isCostNumber &&
        isSupplierString &&
        isDescriptionString &&
        isMeasureString &&
        isEanCodeNumber &&
        isSkuCodeString &&
        isWeightString &&
        isOrderDateString &&
        isDeliveryDateString
    ) {
        return true;
    }
    else {
        throw new Error('Sent json is not valid');
    }
}

export { ProductDTO, productTypeGuard }