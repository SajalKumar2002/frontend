import React, { useMemo } from 'react';

const TablePreview = React.memo(({ tableData }) => {
    
    const headers = useMemo(() => {
        return tableData ? tableData.length > 0 ? Object.keys(tableData[0]) : [] : "";
    }, [tableData]);

    if (!tableData || tableData.length === 0) {
        return (
            <div className="align-content-center">
                <h5 className='text-center'>Preview of the DB will be displayed here.</h5>
            </div>
        );
    }

    return (
        <div className='border border-dark border-1 rounded-3 p-3'>
            <div className='container overflow-auto'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, headerIndex) => (
                                    <td key={headerIndex}>{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
});

export default TablePreview;
