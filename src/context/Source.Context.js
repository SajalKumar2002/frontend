import React, { createContext, useReducer } from "react";

const DataSourceContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SOURCE":
      localStorage.setItem("source", action.payload.source);
      localStorage.setItem("type", action.payload.type);
      return {
        ...state,
        source: action.payload.source,
        type: action.payload.type,
      };
    case "MODEL":
      localStorage.setItem("model", action.payload.model);
      return {
        ...state,
        model: action.payload.model,
      };
    case "CLEAR":
      localStorage.clear();
      return {
        source: "",
        model: "",
        type: "",
      };
    default:
      return state;
  }
}

export const DataSourceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    source: localStorage.getItem("source") || "",
    type: localStorage.getItem("type") || "",
    model: localStorage.getItem("model") || "",
  });

  return (
    <DataSourceContext.Provider value={{ state: state, dispatch }}>
      {children}
    </DataSourceContext.Provider>
  );
};

export default DataSourceContext;
