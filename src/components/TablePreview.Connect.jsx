import React from 'react'

const Table = ({ TableNames }) => {

    if (!TableNames) {
        return (
            <div className="align-content-center">
                <h5 className='text-center'>Please Select a Table for preview.</h5>
            </div>
        )
    }

    return (
        <div className='border border-dark border-1 rounded-3 p-3'>
            <div className='container'>
                <ul>
                    {TableNames.map((TableName, index) => (
                        <div className='m-2  ps-3 px-1'>
                            <li>{TableName}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Table