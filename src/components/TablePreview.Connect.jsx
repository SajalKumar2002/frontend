import React from 'react'

const Table = ({ TableNames }) => {

    if (!TableNames) {
        return (
            <div className="col-5 align-content-center">
                <h5 className='text-center'>No Database or Tables To display</h5>
            </div>
        )
    }

    return (
        <div className="col-5 align-content-center">
            <div className='border border-dark border-1 rounded-3 p-3'>
                <h5>Your Database Name goes here</h5>
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
        </div>
    )
}

export default Table