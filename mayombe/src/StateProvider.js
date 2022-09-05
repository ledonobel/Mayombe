import React, { createContext, useContext, useReducer} from "react";

// Preparation of the dataLayer
export const StateContext = createContext();

// wrap our app and provide datalayer to every component
export const StateProvider = ({ reducer, initialState, children }) => 
(< StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>

);
// pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
//API redux