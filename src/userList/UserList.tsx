import React from 'react';

interface Props {
    userName: string | undefined;
    userAge: number | undefined;
    UserGender: string | undefined;
    deleteClick: React.MouseEventHandler;
    updateClick: React.MouseEventHandler;
}

const UserList : React.FC<Props> = ({ userName , userAge , UserGender , deleteClick , updateClick }) => {
    return (
        <div className="userList-card">
            <div className="userList-card-userName">Name : {userName}</div>|
            <div className="userList-card-userAge">Age : {userAge}</div>|
            <div className="userList-card-userGender">Gender : {UserGender}</div>
            <div className="userList-card-btnWrap">
                <button onClick={deleteClick} className="userList-card-deleteBtn">Delete</button>
                <button onClick={updateClick} className="cardList-card-updateBtn">Update</button>
            </div>
        </div>
    );
}

export default UserList;