interface UserDTO {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    permissions: string[];
    addDate: string;
    updateDate: string;
    status: string;
    activityLog: string[];
}

export default UserDTO;