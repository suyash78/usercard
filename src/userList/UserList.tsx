import React from 'react';
import './userList.css';

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
            <div className="userList-card-userInfo">Name : {userName}</div>|
            <div className="userList-card-userInfo">Age : {userAge}</div>|
            <div className="userList-card-userInfo">Gender : {UserGender}</div>
            <div className="userList-card-btnWrap">
                <button onClick={deleteClick} className="userList-card-btn userList-card-deleteBtn">Delete</button>
                <button onClick={updateClick} className="userList-card-btn userList-card-updateBtn">Update</button>
            </div>
        </div>
    );
}

export default UserList;