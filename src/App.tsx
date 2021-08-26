import { Box, Grid } from '@material-ui/core';
import UserForm from './component/userForm/UserForm';
import UserList from './component/userList/UserList';
import { UserProvider } from './userDataContext/UserContext';

function App() {
  return (
    <>
      
        <UserProvider>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' >
              <UserForm />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} style={{backgroundColor:'#52b788'}}>
              <Box p={3}>
                <UserList />
              </Box>
          </Grid>
        </Grid>
        </UserProvider>
      
    </>
  );
}

export default App;
