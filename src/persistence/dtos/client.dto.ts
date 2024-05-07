interface ClientDTO {
    id: number;
    name: string;
    type: string;
    cpfCnpj: string;
    address: string;
    email: string;
    phone: string;
    addDate: string;
    updateDate: string;
    status: string;
    activityLog: string[];
}

const legalKeys: { [key: string]: string } = {
    "name": "string",
    "type": "string",
    "cpfCnpj": "string",
    "address": "string",
    "email": "string",
    "phone": "string",
    "status": "string"
}

function checkIfObjHasLegalKeys(obj: any): boolean {
    const objectKeys = Object.keys(obj);
    objectKeys.forEach((key) => {
        if (!(key in legalKeys)) {
            throw new Error(`${key} iis not valid for client`);
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

function clientTypeGuard(obj: any): obj is ClientDTO {
    const isNameString = typeof obj.name === 'string';
    const isTypeString = typeof obj.type === 'string';
    const isCpfCnpj = typeof obj.cpfCnpj === 'string';
    const isAddress = typeof obj.address === 'string';
    const isEmailString = typeof obj.email === 'string';
    const isPhoneString = typeof obj.phone === 'string';

    if (
        isNameString &&
        isTypeString &&
        isCpfCnpj &&
        isAddress &&
        isEmailString &&
        isPhoneString
    ) {
        return true;
    }
    else {
        throw new Error('Sent json is not valid');
    }
}

export { ClientDTO, clientTypeGuard, checkIfObjHasLegalKeys, checkIfLegalKeysAreCorrectType };