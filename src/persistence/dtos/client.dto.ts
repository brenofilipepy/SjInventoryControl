interface ClientDTO {
    id: number;
    name: string;
    type: string;
    cpf: string;
    cnpj: string;
    address: string[];
    email: string;
    phone: string;
    addDate: string;
    updateDate: string;
    status: string;
    activityLog: string[];
}

export default ClientDTO;