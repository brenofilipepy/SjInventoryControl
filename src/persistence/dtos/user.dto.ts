interface UserDTO {
    //id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    // [createProduct, readProduct, updateProduct, deleteProduct, createClient, readClient, updateClient, deleteClient] (manager)
    // ["createProduct", "readProduct", "createClient", "readClient"] (seller)
    permissions: string;
    addDate: string;
    updateDate: string;
    status: string;
    activityLog: string;
}

function registerUserTypeGuard(obj: any): obj is UserDTO {
    return (
        "name" in obj &&
        "email" in obj &&
        "password" in obj
    );
}

function registerUserFullTypeGuard(obj: any): obj is UserDTO {
    return (
        "name" in obj &&
        "email" in obj &&
        "password" in obj &&
        "role" in obj &&
        "permissions" in obj &&
        "addDate" in obj &&
        "updateDate" in obj &&
        "status" in obj
    );
}

export { UserDTO, registerUserTypeGuard, registerUserFullTypeGuard };