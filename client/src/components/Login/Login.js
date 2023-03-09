import React from 'react'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import {Grid, Paper} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';


const Login = () => {

  const formStyle = {borderRadius:10, padding: 20, height: '32vh', width: 480, margin: "40px auto", backgroundColor: "#303461"}
  return (
    <Grid>    
      <Paper elevation={10} style={formStyle}>
      <Typography variant="h1"fontSize={32} 
        sx={{
          color: 'white',
          fontWeight: "bold",
          textAlign: "center"       
        }}>Login to your account</Typography>

        <Typography variant="h1"fontSize={16} 
          sx={{
            color: 'white',
            margin: "10px 0px",
            textAlign: "center"
        }}>In order to use the forums and personal list capabilities, you will need to login to your account.</Typography>
      
      <TextField label="Username" variant="outlined" fullWidth required 
        sx={{
          bgcolor: '#000732',
          input: { color: 'white' },
          label: { color: 'white' },
          margin: "20px 0px",
          borderRadius: "10px"
        }}
        InputProps={{startAdornment:(
          <InputAdornment position="start">
            <PersonIcon style={{ color: 'white' }}/>
          </InputAdornment>
        )}} 
        />
      <TextField  label="Password" variant="outlined" margin="30px" type="password" fullWidth required 
      sx={{
          bgcolor: '#000732',
          input: { color: 'white' },
          label: { color: 'white' },
          margin: "20px 0px",
          borderRadius: "10px"
        }} 
        InputProps={{startAdornment:(
          <InputAdornment position="start">
            <LockOutlinedIcon style={{ color: 'white' }}/>
          </InputAdornment>
        )}} />
        
        <Button
            className=" bg-main-background p-5 text-3xl font-semibold w-full rounded-full"
          >
            LOGIN
          </Button>


        
        


      </Paper>

    </Grid>

  )
}

export default Login