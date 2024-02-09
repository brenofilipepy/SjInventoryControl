import ClientModel from "../../models/client.model";
import ClientMockData from '../data-mocks/client.data.mock.json';

test('create_new_user', async () => {
  jest.clearAllMocks();

  ClientModel.create = jest.fn().mockResolvedValue(ClientMockData);

  const newClient = await ClientModel.create(ClientMockData);

  expect(ClientModel.create).toHaveBeenCalledWith(ClientMockData);
  expect(newClient.id).toBe(1);
  expect(newClient.name).toBe('John Doe');
  expect(newClient.email).toBe('john@example.com');
});
