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

const ClientTableGenerator: React.FC<TableProps> = ({ data }) => {
    const [jsonData, setJsonData] = useState<Client[]>(data);
    const [searchInputArray, setSearchInputArray] = useState([]);
    const [currentIndex, setIndex] = useState(0);
    const [sortByNameAsc, setSortByNameAsc] = useState<boolean>(true);


    useEffect(() => {
        setJsonData(data);
    }, [searchInputArray, data]);

    const orderByName = () => {
        setSortByNameAsc(!sortByNameAsc);

        const table = Object.values(jsonData[currentIndex]) as Client[];
        const sortedData = table.sort((a, b) =>
            sortByNameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );

        jsonData[currentIndex] = sortedData;
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
            setSearchInputArray(prevArray => prevArray.slice(0, -1));
        }
    }

    const renderTable = (tableIndex?: number) => {
        if (tableIndex < 0 || tableIndex >= jsonData.length) {
            throw new Error('Table Index out of range');
        }

        if (currentIndex !== 0) {
            const table = Object.values(jsonData[currentIndex]);
            return (
                table.map(client => (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.name}</td>
                        <td>{client.phone}</td>
                        <td>{client.email}</td>
                        <td>{client.status == 'Ativo' ? <span className="text-success">{client.status}</span> : <span className="text-danger">{client.status}</span>}</td>
                    </tr>
                ))
            )
        } else {
            const table = Object.values(jsonData[0]);
            return (
                table.map(client => (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.name}</td>
                        <td>{client.phone}</td>
                        <td>{client.email}</td>
                        <td>{client.status == 'Ativo' ? <span className="text-success">{client.status}</span> : <span className="text-danger">{client.status}</span>}</td>
                    </tr>
                ))
            )
        }
    }

    const handlePagingIndex = (tableIndex: number) => {
        setIndex(tableIndex);
    }

    const advancePagingIndex = () => {
        if (currentIndex > calculatePaging()) {
            alert('Impossible to advance paging, final page reached!');
            return;
        }
        setIndex(currentIndex + 1);
    }

    const retreatPagingIndex = () => {
        if (currentIndex < 0) {
            alert('Impossible to retreat paging, first page reached!');
            return;
        }
        setIndex(currentIndex - 1);
    }

    const renderSearchTable = () => {
        const inputString = searchInputArray.join("").toLowerCase();
        const filteredData = Object.values(jsonData[currentIndex]).filter((item) => item.name.toLowerCase().includes(inputString));
        return (
            <React.Fragment>
                {filteredData.map(searchedClient => (
                    <tr key={searchedClient.id}>
                        <td>{searchedClient.id}</td>
                        <td>{searchedClient.name}</td>
                        <td>{searchedClient.phone}</td>
                        <td>{searchedClient.email}</td>
                        <td>{searchedClient.status == 'Ativo' ? <span className="text-success">{searchedClient.status}</span> : <span className="text-danger">{searchedClient.status}</span>}</td>
                </tr>
                ))}
            </React.Fragment>
        );
    }

    const calculatePaging = (): number => {
        return jsonData.length;
    }

    const paging = (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-sm">
                <li className="page-item"><a className="page-link" href="#" onClick={retreatPagingIndex}>Anterior</a></li>
                {Array.from({ length: calculatePaging() }, (_, index) => (
                    <li className={`page-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <a className="page-link" href="#" onClick={() => handlePagingIndex(index)}>{index + 1}</a>
                    </li>
                ))}
                <li className="page-item"><a className="page-link" href="#" onClick={advancePagingIndex}>Próximo</a></li>
            </ul>
        </nav>
    )


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Lista de Clientes</h4>
                <input 
                    id='search-input'
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Filtrar por nome" 
                    aria-label="Filtrar por nome" 
                    aria-describedby="basic-addon1"
                    onKeyDown={searchContent}/>
            </div>
            <table className="table table-sm" style={{borderCollapse: 'separate', borderSpacing: 6 + "px"}}>
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
                    ? renderTable()
                    : renderSearchTable()
                }
                </tbody>
            </table>
            <footer>
                {paging}
            </footer>
        </div>
    );

};

export default ClientTableGenerator;