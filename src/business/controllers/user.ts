import { registerUserTypeGuard } from "../../persistence/dtos/user.dto";
import UserRepository from "../../persistence/repositories/user.repository.ts";
import Logger from '../logger.ts';
import { UserDTO } from "../../persistence/dtos/user.dto";
import IHttpResponse from "../../interfaces/IHttpResponse.ts";

class User {
    private userRepository: UserRepository = new UserRepository();
    private logger = Logger.getLogger();

    create(userJson : JSON): IHttpResponse {
        if (registerUserTypeGuard(userJson)) {
            this.logger.info("Sent json is valid");
            try {
                this.userRepository.create({
                    name : userJson.name,
                    email: userJson.email,
                    password : userJson.password,
                    role: "seller",
                    permissions: ["createProduct", "readProduct", "createClient", "readClient"].toString(),
                    addDate: `${this.logger.timeStamp()}`,
                    updateDate: "null",
                    status: "active",
                    activityLog: [`${this.logger.timeStamp()} - User Created`].toString()
                });
                const response: IHttpResponse = {
                    message: 'User Created Successfully!',
                    date: new Date(),
                    status: 201
                };

                this.logger.info(response);
                return response;
                
            } catch (error) {
                const response: IHttpResponse = {
                    message: `Error while creating user ${error}`,
                    date: new Date(),
                    status: 500
                };

                this.logger.error(response);
                return response;
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

    getById() {}


}

export default User;