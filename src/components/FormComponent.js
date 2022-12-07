import React, { useState } from "react";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Divider,
  Typography,
  CardContent,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios"; 
export const FormComponent = () =>{
    

       
        const [state, setState] = useState({
          firstName: "",
          lastName: "",
          phoneNumber :"",
          email :""
        });
        const handleChange = (e) => {
          const value = e.target.value;
          setState({
            ...state,
            [e.target.name]: value
          });
        };
        const handleSubmit = (e) => {
          e.preventDefault();
          const userData = {
            firstName: state.firstName,
            lastName: state.lastName,
            phoneNumber: state.phoneNumber,
            email: state.email
          };
          axios.post("http://localhost:9095/users/save", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
          });
        }
   
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Create user form
      </Typography>
      <Card>
        <CardContent>
            <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
            <TextField 
                label="First Name"
                placeholder="Enter First Name"
                name = 'firstName'
                variant="outlined"
                value={state.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField 
                label="Last Name"
                name = 'lastName'
                placeholder="Enter Last Name"
                variant="outlined"
                value={state.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField 
                label="Phone Number"
                name = 'phoneNumber'
                type="number"
                placeholder="Enter Phone Number"
                
                value={state.phoneNumber}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField 
                label="Email"
                name = 'email'
                type="email"
                value={state.email}
                placeholder="Enter Email"
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <Button type="submit"  variant="contained" color="primary" fullWidth> Create User </Button>
            </Grid>
            <Grid xs={12} item>
              <Button type="reset" variant="contained" color="primary" fullWidth> Reset fields </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
      
    </div>
  );
}
