import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface Client {
    id: number;
    name: string;
    type: string;
    cpf: string;
    cnpj: string;
    address: string;
    email: string;
    phone: string;
    status: string;
    activityLog: string;
};

interface TableProps {
    data: Client[];
}

// TODO: Implement paging
const ClientTableGenerator: React.FC<TableProps> = ({ data }) => {
    const [jsonData, setJsonData] = useState<Client[]>(data);
    const [searchInputArray, setSearchInputArray] = useState([]);
    const [sortByPriceAsc, setSortByPriceAsc] = useState<boolean>(true);
    const [sortByNameAsc, setSortByNameAsc] = useState<boolean>(true);


    useEffect(() => {
        setJsonData(data);
    }, [searchInputArray, data]);

    const orderByName = () => {
        setSortByNameAsc(!sortByNameAsc);
        const sortedData = [...jsonData].sort((a, b) =>
            sortByNameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        setJsonData(sortedData);
    };

    const addCharacter = (character: string): string[] => {
        setSearchInputArray([...searchInputArray, character]);
        return searchInputArray;
    }

    const searchContent = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const inputChar: string = event.key;
        if (inputChar.length === 1 && inputChar.match(/[a-z]/i) || inputChar === " ") {
            addCharacter(inputChar);
        } else if (inputChar === "Backspace") {
            setSearchInputArray(prevArray => prevArray.slice(0, -1)); // Remove o último caractere
        }
    }

    const renderTable = jsonData.map(product =>
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.phone}</td>
            <td>{product.email}</td>
            <td>{product.status == 'Ativo' ? <span className="text-success">{product.status}</span> : <span className="text-danger">{product.status}</span>}</td>
        </tr>
    );

    const renderSearchTable = () => {
        const inputString = searchInputArray.join("").toLowerCase();
        const filteredData = jsonData.filter((item) => item.name.toLowerCase().includes(inputString));
        return (
            <React.Fragment>
                {filteredData.map(searchedProduct => (
                    <tr key={searchedProduct.id}>
                        <td>{searchedProduct.id}</td>
                        <td>{searchedProduct.name}</td>
                        <td>{searchedProduct.phone}</td>
                        <td>{searchedProduct.email}</td>
                        <td>{searchedProduct.status == 'Ativo' ? <span className="text-success">{searchedProduct.status}</span> : <span className="text-danger">{searchedProduct.status}</span>}</td>
                    </tr>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <input 
                    id='search-input'
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Filtrar por nome" 
                    aria-label="Filtrar por nome" 
                    aria-describedby="basic-addon1"
                    onKeyDown={searchContent}/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome <a href="#" onClick={orderByName}><i className="bi bi-arrow-down-up"></i></a></th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {searchInputArray.length <=0
                    ? renderTable
                    : renderSearchTable()
                }

                </tbody>
            </table>
        </div>
    );

};

export default ClientTableGenerator;