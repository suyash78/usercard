import React , { useState } from 'react';
import UserList from '../userList/UserList';
import './userForm.css';

interface UserData {
    id: number | undefined;
    name: string | undefined;
    age: number | undefined;
    gender: string | undefined;
}

export default function UserForm() {

    const [userInfo, setUserInfo] = useState<UserData>({ id : 0 , name : '' , age : 0 , gender : '' });
    const [userInfoList, setUserInfoList] = useState<Array<UserData>>([]);
    const [userIndex, setUserIndex] = useState<number>(0);
    const [isUpdate, setIsUpdate] = useState<number>(0)

    const handleSubmit = (event : React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(userInfoList.length >= (userIndex + 1)) {
            userInfoList[(userIndex)] = userInfo;
            setIsUpdate(0);
        } else {
            setUserInfoList([...userInfoList , userInfo]);
            setUserIndex(userIndex + 1);
        }
        setUserInfo({ id : (userInfoList.length + 1) , name : '' , age : 0 , gender : '' });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = event.target;
        setUserInfo({...userInfo , [name] : value });
    }
    
    return (
        <>
            <div className="main-wrap">

                {/* User Form component */}
                <div className="userForm-wrap">
                    <div className="userForm-card">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="userForm-card-input" value={userInfo.name} onChange={handleChange} name="name" placeholder="Name" autoFocus />
                            <input type="number" className="userForm-card-input" value={userInfo.age} onChange={handleChange} name="age" placeholder="Age" />
                            <div className="userForm-card-radioWrap">
                                <div><input type="radio" name="gender" onChange={handleChange} id="gender_male" value="Male" /><label htmlFor="gender_male"> Male</label></div>
                                <div><input type="radio" name="gender" onChange={handleChange} id="gender_female" value="Female" /><label htmlFor="gender_female"> Female</label></div>
                                <div><input type="radio" name="gender" onChange={handleChange} id="gender_others" value="Others" /><label htmlFor="gender_others"> Others</label></div>
                            </div>
                            <button type="submit" className="userForm-card-btn">{(isUpdate === 0) ? "Add" : "Update"}</button>
                        </form>
                    </div>
                </div>

                {/* User Cards List component */}
                <div className="userList-card-wrap">

                    {userInfoList.map( (userRef , mapIndex) => {
                        return(
                            <div key={userRef.id}>
                                <UserList userName={userRef.name} userAge={userRef.age} UserGender={userRef.gender} 
                                    deleteClick={() => setUserInfoList( userInfoList.filter( (arrEel , index) => index!==mapIndex ))} 
                                    editClick={() => {
                                        let findUser: UserData | undefined = userInfoList.find( user => user.id === userRef.id );
                                        setUserInfo({id: findUser?.id , name: findUser?.name , age: findUser?.age , gender: findUser?.gender })
                                        setUserIndex(mapIndex);
                                        setIsUpdate(1);
                                    }} />
                            </div>
                            
                        );
                    })}
                    
                </div>
                
            </div>
        </>
    );
}
