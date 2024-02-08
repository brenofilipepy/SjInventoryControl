interface IRepository {
    create(data: any): Promise<any>;
    getAll(): Promise<any>;
    getById(id: number): Promise<any | null>;
    update(id: number, data: any): Promise<any | null>;
    delete(id: number): Promise<number>;
};

export default IRepository;