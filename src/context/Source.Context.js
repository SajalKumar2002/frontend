import React, { createContext, useReducer } from 'react';

const DataSourceContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case "SOURCE":
            localStorage.setItem("source", action.payload);
            return action.payload;
        default:
            return state;
    }
}

export const DataSourceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, localStorage.getItem("source") || "")

    return (
        <DataSourceContext.Provider value={{ state: state, dispatch }}>
            {children}
        </DataSourceContext.Provider>
    )
}

export default DataSourceContext;