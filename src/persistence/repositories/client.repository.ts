import IRepository from "./iRepository";
import ClientModel from "../models/client.model";
import ClientDTO from "../dtos/client.dto";

class ClientRepository implements IRepository {
    public async create(clientData: ClientDTO): Promise<any> {
        return await ClientModel.create({clientData});
    }

    public async getAll(): Promise<any> {
        return await ClientModel.findAll();
    }

    public async getById(clientId: number): Promise<any | null> {
        return await ClientModel.findByPk(clientId);
    }

    public async update(clientId: number, clientData: any): Promise<any | null> {
        const client = await ClientModel.findByPk(clientId);
        if (client) {
            client.update(clientData);
        }
        return client;
    }

    public async delete(userId: number): Promise<number> {
        return await ClientModel.destroy({ where: { id: userId } });
    }
}

export default ClientRepository;