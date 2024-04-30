import IRepository from "./iRepository";
import UserModel from "../models/user.model";
import { registerUserFullTypeGuard, UserDTO } from "../dtos/user.dto";

class UserRepository implements IRepository {
    public async create(userData: any | string): Promise<any> {
        if (registerUserFullTypeGuard) {
            let user: UserDTO = userData;
            return await UserModel.create({
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
                permissions: user.permissions,
                addDate: user.addDate,
                updateDate: user.updateDate,
                status: user.status,
                activityLog: user.activityLog
            });
        } 
        else {
            console.error('ERROR: Could not parse sent json into user DTO');
        }
    }

    public async getAll(): Promise<any | null> {
        return await UserModel.findAll();
    }

    public async getById(userId: number): Promise<any | null> {
        return await UserModel.findByPk(userId);
    }

    public async update(userId: number, userData: any | string): Promise<any | null> {
        const user = await UserModel.findByPk(userId);
        if (user) {
            user.update(userData);
        }
        return user;
    };

    public async delete(userId: number): Promise<number> {
        return await UserModel.destroy({ where: { id: userId } });
    };
}

export default UserRepository;