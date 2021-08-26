import { useContext } from 'react';
import { deleteUser, editUser } from '../../userDataContext/actions';
import { UserContext } from '../../userDataContext/UserContext';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Typography, Box, Tooltip, Fab } from '@material-ui/core';

const UserList = () => {

    const { state: { userList } , dispatch } = useContext(UserContext);

    const deleteClick = (id: number) => dispatch(deleteUser(id));
    const editClick = (user : number) => dispatch(editUser(user));

    return (
        <div>
            {(userList.length) > 0 ? (
        userList.map(userRef => {
            return(
                
                <div key={userRef.id}>
                    <Box p={2} borderRadius={10} mb={2} style={{backgroundColor:'#d8f3dc'}}>
                        <Typography variant='h6' style={{display:'inline'}}> Name : {userRef.name}  |</Typography>
                        <Typography variant='h6' style={{display:'inline'}}>  Age : {userRef.age}  |</Typography>
                        <Typography variant='h6' style={{display:'inline'}}>  Gender : {userRef.gender}  </Typography>
                        <Box mx={2} display='inline'>
                            <Tooltip title="Edit" aria-label="edit">
                                <Fab onClick={() => editClick(userRef.id)} style={{backgroundColor:"#ee9b00", color:"#fff"}} >
                                    <EditIcon />
                                </Fab>
                            </Tooltip>
                        </Box>
                        <Tooltip title="Delete" aria-label="delete">
                            <Fab color='secondary' onClick={() => deleteClick(userRef.id)} >
                                <DeleteIcon />
                            </Fab>
                        </Tooltip>
                            
                    </Box>
                </div>

            );
        })
    ) : (
        <Box p={2} borderRadius={10} mb={2} style={{backgroundColor:'#d8f3dc'}}><Typography>No Cards Present</Typography></Box>
    )}
        </div>
    );
}

export default UserList;