import IRepository from "./iRepository";
import ClientModel from "../models/client.model";
import { Op } from 'sequelize';

class ClientRepository implements IRepository {
    public async create(clientData: any | string): Promise<any> {
        return await ClientModel.create(clientData);
    }

    public async getAll(): Promise<any> {
        const clients = await ClientModel.findAll({
            where: {
                [Op.or]: [
                    { status: null },
                    { status: { [Op.not]: 'deactivated' } }
                ]
            }
        });

        return clients;
    }

    public async getById(clientId: number): Promise<any | null> {
        const client = await ClientModel.findOne({
            where: {
                id: clientId,
                [Op.or]: [
                    {status: null},
                    {status: {[Op.not]: 'deactivated'}}
                ]
            }
        });

        return client == null ? 'Client is deactivated' : client;
    }

    public async update(clientId: number, clientData: any | string): Promise<any | null> {
        const client = await ClientModel.findByPk(clientId);
        if (client) {
            client.update(clientData);
        }
        return client;
    }

    public async delete(clientId: number): Promise<number> {
        const client = await ClientModel.findByPk(clientId);
        if (client) {
            client.update({ 'status': 'deactivated' });
        }
        return clientId;
    }
}

export default ClientRepository;