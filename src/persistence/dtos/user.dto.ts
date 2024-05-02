interface UserDTO {
    id: number;
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

const legalKeys: { [key: string]: string } = {
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string",
    "permissions": "string",
    "stastus": "string"
};

function registerUserTypeGuard(obj: any): obj is UserDTO {
    const isNameString = typeof obj.name === 'string';
    const isEmailString = typeof obj.email === 'string';
    const isPasswordString = typeof obj.password === 'string';

    return isNameString && isEmailString && isPasswordString;
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

function checkIfObjHasLegalKeys(obj: any): boolean {
    const objectKeys = Object.keys(obj);
    objectKeys.forEach((key) => {
        if (!(key in legalKeys)) {
            throw new Error(`${key} is not valid for user`);
        }
    });

    return true;
}

function getKeyByValue(object: { [key: string]: any }, value: any): string | undefined {
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
                return prop;
        }
    }
    return undefined;
}

function checkIfLegalKeysAreCorrectType(obj: any): boolean {
    const objKeys = Object.keys(obj);

    objKeys.forEach((key) => {
        if (typeof obj[key] != legalKeys[key]) {
            throw new Error(`Error, ${getKeyByValue(obj, obj[key])} is not ${legalKeys[key]}`);
        }
    })

    return true;
}

export { UserDTO, registerUserTypeGuard, registerUserFullTypeGuard, checkIfObjHasLegalKeys, checkIfLegalKeysAreCorrectType };