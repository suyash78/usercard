import React , { FormEvent, useState, useContext, useEffect } from 'react';
import { UserData } from '../../userDataContext/Interfaces';
import { addUser, clearRef, updateUser } from '../../userDataContext/actions';
import { UserContext } from '../../userDataContext/UserContext';
import { Button, FormControl, InputLabel, OutlinedInput, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@material-ui/core';

export default function UserForm() {
    
    const { state: { userList , editUser } , dispatch } = useContext(UserContext);

    const [userInfo, setUserInfo] = useState<UserData>({ id : 0 , name : '' , age : 0 , gender : '' });
    const [editUserId, seteditUserId] = useState<number | undefined>();

    useEffect(() => {
        if(editUser !== undefined) {
            setUserInfo(editUser);
            seteditUserId(userList.findIndex(user => user.id === editUser.id));
        }
    }, [editUser]);

    const handleSubmit = (event : FormEvent) => {

        event.preventDefault();

        if(editUser !== undefined) {
            if(editUserId !== undefined) {
                dispatch(updateUser(userInfo , editUserId));
                dispatch(clearRef());
                seteditUserId(undefined);
            }
        } else {
            dispatch(addUser(userInfo));
        }

        setUserInfo({ id : 0 , name : '' , age : 0 , gender : '' });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = event.target;
        setUserInfo({...userInfo , [name] : value , id: new Date().getTime()});
    }
    
    return (
        <>
            
            {/* <Paper elevation={8}> */}
                <Box p={3} borderRadius={15} boxShadow={3} style={{backgroundColor:"#fff"}}>
                    <form onSubmit={handleSubmit}>
                        <FormControl variant="outlined" color='secondary' style={{display:'block', marginBottom:'20px'}}>
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput id="component-outlined" value={userInfo.name} onChange={handleChange} name="name" label="Name" required />
                        </FormControl>
                        <FormControl variant="outlined" color='secondary' style={{display:'block', marginBottom:'20px'}}>
                            <InputLabel htmlFor="component-outlined">Age</InputLabel>
                            <OutlinedInput id="component-outlined" value={userInfo.age} onChange={handleChange} name="age" label="Age" />
                        </FormControl>
                        <FormControl component="fieldset" style={{display:'block', marginBottom:'20px'}}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={userInfo.gender} onChange={handleChange}>
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <Button fullWidth type="submit" style={{backgroundColor:"#4caf50", color:"#fff"}} size="large" variant="contained" className="userForm-card-btn">
                            {(editUserId === undefined) ? 'add' : 'Update'}
                        </Button>
                    </form>
                </Box>
            {/* </Paper> */}
            {/* User Form component */}
            
                        

            
        </>
    );
}


