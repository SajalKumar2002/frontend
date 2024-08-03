import React, { createContext, useReducer } from 'react';

const DataSourceContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case "SOURCE":
            localStorage.clear();
            localStorage.setItem('source', action.payload.source)
            return {
                ...state,
                source: action.payload.source
            };
        case "TYPE":
            localStorage.setItem('type', action.payload.type)
            return {
                ...state,
                type: action.payload.type
            };
        case "MODEL":
            localStorage.setItem('model', action.payload.model)
            return {
                ...state,
                model: action.payload.model
            };
        default:
            return state;
    }
}

export const DataSourceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        source: localStorage.getItem("source") || "",
        type: localStorage.getItem("type") || "",
        model: localStorage.getItem("model") || ""
    })

    return (
        <DataSourceContext.Provider value={{ state: state, dispatch }}>
            {children}
        </DataSourceContext.Provider>
    )
}

export default DataSourceContext;