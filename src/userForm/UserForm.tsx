import React , { useState } from 'react';

export default function UserForm() {

    const [userInfo, setUserInfo] = useState({ userId : 0 , name : '' , age : 0 , gender : '' });
    const [userList, setUserList] = useState<Array<object>>([]);

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserList([...userList , userInfo]);
        setUserInfo({ userId : (userList.length + 1) , name : '' , age : 0 , gender : '' });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = event.target;
        console.log(name, value);
        setUserInfo({...userInfo , [name] : value });
    }

    console.log(userList);
    
    return (
        <>
            <div className="info_wrap">
                <div className="info_card">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="info_input" value={userInfo.name} onChange={handleChange} name="name" placeholder="Name" />
                        <input type="number" className="info_input" value={userInfo.age} onChange={handleChange} name="age" placeholder="Age" />
                        <div className="info_radio_wrap">
                            <div><input type="radio" name="gender" onChange={handleChange} id="gender_male" value="Male" /><label htmlFor="gender_male"> Male</label></div>
                            <div><input type="radio" name="gender" onChange={handleChange} id="gender_female" value="Female" /><label htmlFor="gender_female"> Female</label></div>
                            <div><input type="radio" name="gender" onChange={handleChange} id="gender_others" value="Others" /><label htmlFor="gender_others"> Others</label></div>
                        </div>
                        <button type="submit" className="info_btn">Add</button>
                    </form>
                </div>
            </div>
        </>
    );
}
