import IRepository from "./iRepository";
import UserModel from "../models/user.model";

class UserRepository implements IRepository {
    public async create(userData: any | string): Promise<any> {
        return await UserModel.create({userData});
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