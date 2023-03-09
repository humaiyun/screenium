import React from 'react'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import {Grid, Paper} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import {useState} from 'react';


const Login = () => {
  let [authMode, setAuthMode] = useState('login')

  const changeMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login')
  }


  const loginStyle = {borderRadius:10, padding: 40, height: '35vh', width: 680, margin: "233px auto", backgroundColor: "#303461"}
  const signupStyle = {borderRadius:10, padding: 40, height: '45vh', width: 680, margin: "233px auto", backgroundColor: "#303461"}
  if(authMode === "login"){
    return (
      <Grid>    
        <Paper elevation={10} style={loginStyle}>
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
        
        <TextField label="Username" fullWidth required 
          sx={{
            bgcolor: '#000732',
            input: { color: 'white' },
            label: { color: 'white' },
            margin: "20px 20px 20px 0px",
            borderRadius: "10px"
          }}
          InputProps={{startAdornment:(
            <InputAdornment position="start">
              <PersonIcon style={{ color: 'white' }}/>
            </InputAdornment>
          )}} 
          />
        <TextField  label="Password"  margin="30px" type="password" fullWidth required 
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
          <Typography>
            Do you have an account? <Button onClick={changeMode}>Sign Up</Button>
          </Typography>
  
  
          
          
  
  
        </Paper>
  
      </Grid>
  
    )

  }
  return(
    <Grid>    
        <Paper elevation={10} style={signupStyle}>
        <Typography variant="h1"fontSize={32} 
          sx={{
            color: 'white',
            fontWeight: "bold",
            textAlign: "center"       
          }}>Sign Up to your account</Typography>
  
          <Typography variant="h1"fontSize={16} 
            sx={{
              color: 'white',
              margin: "10px 0px",
              textAlign: "center"
          }}>Signing up for an account is free and easy. Fill out the form below to get started.</Typography>
        
        <TextField label="Username" fullWidth required 
          sx={{
            bgcolor: '#000732',
            input: { color: 'white' },
            label: { color: 'white' },
            margin: "20px 20px 20px 0px",
            borderRadius: "10px"
          }}
          InputProps={{startAdornment:(
            <InputAdornment position="start">
              <PersonIcon style={{ color: 'white' }}/>
            </InputAdornment>
          )}} 
          />
        <TextField  label="Password"  margin="30px" type="password" fullWidth required 
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
        <TextField  label="Confirm Password"  margin="30px" type="password" fullWidth required
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

        
        

        <TextField label="Email" fullWidth required 
          sx={{
            bgcolor: '#000732',
            input: { color: 'white' },
            label: { color: 'white' },
            margin: "20px 20px 20px 0px",
            borderRadius: "10px"
          }}
          InputProps={{startAdornment:(
            <InputAdornment position="start">
              <EmailIcon style={{ color: 'white' }}/>
            </InputAdornment>
          )}} 
          />
          
          <Button
              className=" bg-main-background p-5 text-3xl font-semibold w-full rounded-full"
            >
              Signup
            </Button>
  
  
          
          
  
  
        </Paper>
  
      </Grid>
    

  )
}


export default Login