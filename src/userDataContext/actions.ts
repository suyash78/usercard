import { UserAction, UserData } from "./Interfaces";

export const addUser = (userInfo : UserData) : UserAction => ({
    type: 'add',
    payload: userInfo
});

export const updateUser = (userInfo : UserData , userId : number) : UserAction => ({
    type: 'update',
    payload: userInfo,
    payloadId: userId
});

export const editUser = (userId : number) : UserAction => ({
    type: 'edit',
    payload: userId
});

export const deleteUser = (userId : number) : UserAction => ({
    type: 'delete',
    payload: userId
})

export const clearRef = () : UserAction => ({
    type: 'clear'
})