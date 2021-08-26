import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { UserAction, UserDataModel, UserApp } from "./Interfaces";

const defaultList : UserApp = {
    userList: []
};

const userReducer = ( state: UserApp , action: UserAction ) : UserApp => {
    
    if(action.type === 'add') {

        return {...state , userList: [...state.userList , action.payload]};

    } else if(action.type === 'update') {

        state.userList[action.payloadId] = action.payload;
        return state;

    } else if(action.type === 'edit') {

        return {...state , editUser: state.userList.find(user => user.id === action.payload)};

    } else if(action.type === 'delete') {

        return {...state , userList: state.userList.filter((user) => user.id !== action.payload)};

    } else if(action.type === 'clear') {

        return {...state , editUser : undefined};
        
    } else {

        return state;

    }
};

export const UserContext = createContext({} as UserDataModel);

export const UserProvider : React.FC = ({ children }) => {
    const [state , dispatch] = useReducer(userReducer , defaultList);

    return(
        <UserContext.Provider value={{state , dispatch}}>{children}</UserContext.Provider>
    );
}