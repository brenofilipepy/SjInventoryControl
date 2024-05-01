import UserRepository from "../../persistence/repositories/user.repository.ts";
import Logger from '../logger.ts';
import IHttpResponse from "../../interfaces/IHttpResponse.ts";
import { registerUserTypeGuard, UserDTO } from "../../persistence/dtos/user.dto";
import { IErrorResponse, isIErrorResponse } from "../../interfaces/IErrorResponse.ts";

class User {
    private userRepository: UserRepository = new UserRepository();
    private logger = Logger.getLogger();

    async create(userJson: JSON): Promise<IHttpResponse> {
        if (registerUserTypeGuard(userJson)) {
            this.logger.info("Sent json is valid");

            try {
                await this.userRepository.create({
                    name: userJson.name,
                    email: userJson.email,
                    password: userJson.password,
                    role: "seller",
                    permissions: ["createProduct", "readProduct", "createClient", "readClient"].toString(),
                    addDate: `${this.logger.timeStamp()}`,
                    updateDate: "null",
                    status: "active",
                    activityLog: [`${this.logger.timeStamp()} - User Created`].toString()
                });

                return {
                    message: `User created successfully`,
                    date: new Date(),
                    status: 200
                };
            } catch (error) {
                return {
                    message: `${error.errors[0].type} - ${error.errors[0].message} (${error.errors[0].value})`,
                    date: new Date(),
                    status: 500
                };
            }
        } else {
            const response: IHttpResponse = {
                message: 'Sent json is not valid',
                date: new Date(),
                status: 400
            };

            this.logger.error(response);

            return response;
        }
    };

    async getAll(): Promise<IHttpResponse> {
        try {
            const users = JSON.stringify(await this.userRepository.getAll());
            const response: IHttpResponse = {
                message: JSON.parse(users),
                date: new Date(),
                status: 200
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not get users data\n ERROR: ${error}`,
                date: new Date(),
                status: 500
            };

            this.logger.error(response);
            return response;
        }
    }

    async getById(userId: number): Promise<IHttpResponse> {
        try {
            const user = JSON.stringify(await this.userRepository.getById(userId));
            const response: IHttpResponse = {
                message: JSON.parse(user),
                date: new Date(),
                status: 200
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not get user ${userId}`,
                date: new Date(),
                status: 500
            };

            this.logger.info(response);
            return response;
        }
    }

    async delete(userId: number): Promise<IHttpResponse> {
        try {
            const user = JSON.stringify(await this.userRepository.delete(userId));
            const response: IHttpResponse = {
                message: `User ${userId} deleted successfully`,
                date: new Date(),
                status: 200,
            };

            this.logger.info(response);
            return response;
        } catch (error) {
            const response: IHttpResponse = {
                message: `Could not delete user ${userId}`,
                date: new Date(),
                status: 500
            }
            this.logger.error(response);
            return response;
        }
    }


}

export default User;