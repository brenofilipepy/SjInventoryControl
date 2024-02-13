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
    const [sortByPriceAsc, setSortByPriceAsc] = useState<boolean>(true);
    const [sortByNameAsc, setSortByNameAsc] = useState<boolean>(true);


    useEffect(() => {
        setJsonData(data);
    }, [searchInputArray, data]);

    const orderByName = () => {
        setSortByNameAsc(!sortByNameAsc);
        const sortedData = [...jsonData].sort((a, b) =>
            sortByNameAsc ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome)
        );
        setJsonData(sortedData);
    };

    const orderByPrice = () => {
        setSortByPriceAsc(!sortByPriceAsc);
        const sortedData = [...jsonData].sort((a, b) =>
            sortByPriceAsc ? b.preco - a.preco : a.preco - b.preco
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
            <td>{product.nome}</td>
            <td>{product.tipo}</td>
            <td>{product.material}</td>
            <td>{product.pedra || '-'}</td>
            <td>{product.preco.toFixed(2)}</td>
        </tr>
    );

    const renderSearchTable = () => {
        const inputString = searchInputArray.join("").toLowerCase();
        const filteredData = jsonData.filter((item) => item.nome.toLowerCase().includes(inputString));
        return (
            <React.Fragment>
                {filteredData.map(searchedProduct => (
                    <tr key={searchedProduct.id}>
                        <td>{searchedProduct.id}</td>
                        <td>{searchedProduct.nome}</td>
                        <td>{searchedProduct.tipo}</td>
                        <td>{searchedProduct.material}</td>
                        <td>{searchedProduct.pedra || '-'}</td>
                        <td>{searchedProduct.preco.toFixed(2)}</td>
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
                        <th>Tipo</th>
                        <th>Material</th>
                        <th>Pedra</th>
                        <th>Preço <a href="#" onClick={orderByPrice}><i className="bi bi-arrow-down-up"></i></a></th>
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

export default ProductTableGenerator;