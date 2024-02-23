import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface Product {
    id: number;
    nome: string;
    tipo: string;
    material: string;
    pedra: string | null;
    preco: number;
};

interface TableProps {
    data: Product[];
}

const ProductTableGenerator: React.FC<TableProps> = ({ data }) => {
    const [jsonData, setJsonData] = useState<Product[]>(data);
    const [searchInputArray, setSearchInputArray] = useState([]);
    const [currentIndex, setIndex] = useState(0);
    const [sortByPriceAsc, setSortByPriceAsc] = useState<boolean>(true);
    const [sortByNameAsc, setSortByNameAsc] = useState<boolean>(true);

    useEffect(() => {
        setJsonData(data);
    }, [searchInputArray, data]);

    const orderByName = () => {
        setSortByNameAsc(!sortByNameAsc);

        const table = Object.values(jsonData[currentIndex]) as Product[];
        const sortedData = table.sort((a, b) =>
            sortByNameAsc ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome)
        );

        jsonData[currentIndex] = sortedData;
    };

    const orderByPrice = () => {
        setSortByPriceAsc(!sortByPriceAsc);

        const table = Object.values(jsonData[currentIndex]) as Product[];
        const sortedData = table.sort((a, b) =>
            sortByPriceAsc ? b.preco - a.preco : a.preco - b.preco
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

    const operations = (
        <>
            <a>
                <i className="bi bi-pencil-square text-info"/>
            </a>
            &nbsp;&nbsp;
            <a>
                <i className="bi bi-trash-fill text-danger"/>
            </a>
        </>
    );

    const renderTable = (tableIndex?: number) => {
        if (tableIndex < 0 || tableIndex >= jsonData.length) {
            throw new Error('Table Index out of range');
        }

        if (currentIndex !== 0) {
            const table = Object.values(jsonData[currentIndex]);
            return (
                table.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.tipo}</td>
                        <td>{product.material}</td>
                        <td>{product.pedra || '-'}</td>
                        <td>R${product.preco.toFixed(2).replace('.', ',')}</td>
                        <td>{operations}</td>
                    </tr>
                ))
            )
        } else {
            const table = Object.values(jsonData[0]);
            return (
                table.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.tipo}</td>
                        <td>{product.material}</td>
                        <td>{product.pedra || '-'}</td>
                        <td>R${product.preco.toFixed(2).replace('.', ',')}</td>
                        <td>{operations}</td>
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
        const filteredData = Object.values(jsonData[currentIndex]).filter((item) => item.nome.toLowerCase().includes(inputString));
        return (
            <React.Fragment>
                {filteredData.map(searchedProduct => (
                    <tr key={searchedProduct.id}>
                        <td>{searchedProduct.id}</td>
                        <td>{searchedProduct.nome}</td>
                        <td>{searchedProduct.tipo}</td>
                        <td>{searchedProduct.material}</td>
                        <td>{searchedProduct.pedra || '-'}</td>
                        <td>R${searchedProduct.preco.toFixed(2).replace('.', ',')}</td>
                        <td>{operations}</td>
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
            <div className="d-flex justify-content-between align-items-center mb-3 row-md-5">
            <h4>Lista de Produtos</h4>
                <input 
                    id='search-input'
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Buscar Produto" 
                    aria-label="Buscar Produto" 
                    aria-describedby="basic-addon1"
                    onKeyDown={searchContent}/>
            </div>
            <table className="table table-sm" style={{borderCollapse: 'separate', borderSpacing: 6 + "px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome <a href="#" onClick={orderByName}><i className="bi bi-arrow-down-up"></i></a></th>
                        <th>Tipo</th>
                        <th>Material</th>
                        <th>Pedra</th>
                        <th>Preço <a href="#" onClick={orderByPrice}><i className="bi bi-arrow-down-up"></i></a></th>
                        <th>Operações</th>
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

export default ProductTableGenerator;