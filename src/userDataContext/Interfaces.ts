import React from "react";

export type UserAction =
    | { type: 'add'; payload: UserData }
    | { type: 'update'; payload: UserData; payloadId: number }
    | { type: 'edit'; payload: number}
    | { type: 'delete'; payload: number }
    | { type: 'clear'};

export interface UserData {
    id: number;
    name: string;
    age: number;
    gender: string;
}

export interface UserApp {
    userList: UserData[];
    editUser?: UserData;
}

export interface UserDataModel {
    state: UserApp;
    dispatch: React.Dispatch<UserAction>;
}
