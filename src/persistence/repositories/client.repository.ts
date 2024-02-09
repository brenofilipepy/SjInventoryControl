import IRepository from "./iRepository";
import ClientModel from "../models/client.model";
import { syncModels } from "../../database/databaseConnection";

class ClientRepository implements IRepository {
    public async create(clientData: any | string): Promise<any> {
        const createOp = await ClientModel.create(clientData);
        syncModels();
        return createOp;
    }

    public async getAll(): Promise<any> {
        const findAllOp = await ClientModel.findAll();
        syncModels();
        return findAllOp;
    }

    public async getById(clientId: number): Promise<any | null> {
        const findByPkOp = await ClientModel.findByPk(clientId);
        syncModels();
        return findByPkOp;
    }

    public async update(clientId: number, clientData: any | string): Promise<any | null> {
        const client = await ClientModel.findByPk(clientId);
        if (client) {
            client.update(clientData);
            syncModels();
        }
        return client;
    }

    public async delete(userId: number): Promise<number> {
        const deleteOp = await ClientModel.destroy({ where: { id: userId } });
        syncModels();
        return deleteOp;
    }
}

export default ClientRepository;