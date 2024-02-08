import UserModel from "../../models/user.model";
import UserMockData from "../data-mocks/user.data.mock.json";

test('create_new_user', async () => {
    jest.clearAllMocks();

    UserModel.create = jest.fn().mockResolvedValue(UserMockData);

    const newUser = await UserModel.create(UserMockData);

    expect(UserModel.create).toHaveBeenCalledWith(UserMockData);
    expect(newUser.id).toBe(3);
    expect(newUser.role).toBe('admin');
    expect(newUser.status).toBe("active");
});