import React from 'react';

const subscribers = require("./subscribers");


const Table = () => {
    const subscribersImport = subscribers[0];

    function headerCells(){
        let header = [];

        Object.keys(subscribersImport).map((x, i) => {
            let items = Object.values(subscribersImport)[i];
            header.push(
                <th colSpan={Object.keys(items).length} key={i.name}>
                    {x}
                </th>
            );
            return header;
        });
        return header;
    }

    function dataCells() {
        let data = [];
        let result = Object.values(subscribersImport);

        result.map((x, i) => {
            if (result[i] !== undefined) {
                Object.values(result[i]).map(y => {
                    data.push(<td>{y}</td>);
                    return data;
                });
            }
            return data;
        });

        return data;
        }

    return (
        <React.Fragment>
            <p>subscribers</p>
            <table>
                <thead>
                    <tr>{headerCells()}</tr>
                </thead>
                <tbody>
                    <tr>{dataCells()}</tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Table;