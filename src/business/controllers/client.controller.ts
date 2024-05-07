import ClientRepository from "../../persistence/repositories/client.repository";
import Logger from "../logger";
import IHttpResponse from "../../interfaces/IHttpResponse";
import { ClientDTO, clientTypeGuard, checkIfObjHasLegalKeys, checkIfLegalKeysAreCorrectType } from "../../persistence/dtos/client.dto";

class Client {
    private clientRepository: ClientRepository = new ClientRepository();
    private logger = Logger.getLogger();

    async create(clientJson: JSON): Promise<IHttpResponse> {
        try {
            if (clientTypeGuard(clientJson)) {
                this.logger.info("Sent json is valid");
                await this.clientRepository.create({
                    name: clientJson.name,
                    type: clientJson.type,
                    cpfCnpj: clientJson.cpfCnpj,
                    address: clientJson.address,
                    email: clientJson.email,
                    phone: clientJson.phone,
                    addDate: `${this.logger.timeStamp()}`,
                    updateDate: "null",
                    status: "active",
                    activityLog: [`${this.logger.timeStamp()} - Client Created`].toString()
                });

                return {
                    message: `Client created successfully`,
                    date: new Date(),
                    status: 200
                };
            }
        } catch (error) {
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
    };

    async getAll(): Promise<IHttpResponse> {
        try {
            const clients = JSON.stringify(await this.clientRepository.getAll());
            const response: IHttpResponse = {
                message: JSON.parse(clients),
                date: new Date(),
                status: 200
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not get clients data\n ERROR: ${error}`,
                date: new Date(),
                status: 500
            };

            this.logger.error(response);
            return response;
        }
    };

    async getById(clientId: number): Promise<IHttpResponse> {
        try {
            const client = JSON.stringify(await this.clientRepository.getById(clientId));
            const response: IHttpResponse = {
                message: JSON.parse(client),
                date: new Date(),
                status: 200
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not get client ${clientId}`,
                date: new Date(),
                status: 500
            };

            this.logger.info(response);
            return response;
        }
    };

    // TODO: NOT WORKING
    async update(clientId: number, clientJson: JSON): Promise<IHttpResponse> {
        try {
            if (checkIfObjHasLegalKeys(clientJson)) {
                if (checkIfLegalKeysAreCorrectType(clientJson)) {
                    this.clientRepository.update(clientId, clientJson);
                    return {
                        message: 'Client updated',
                        date: new Date(),
                        status: 200
                    }
                }
            }
        } catch (error) {
            const response: IHttpResponse = {
                message: error.message,
                date: new Date(),
                status: 400
            };

            this.logger.error(response);
            return response;
        }
    };

    async delete(clientId: number): Promise<IHttpResponse> {
        try {
            JSON.stringify(await this.clientRepository.delete(clientId));
            const response: IHttpResponse = {
                message: `Client ${clientId} deleted`,
                date: new Date(),
                status: 500
            }

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not delete client ${clientId}`,
                date: new Date(),
                status: 500
            }

            this.logger.error(response);
            return response;
        }
    };
}

export default Client;