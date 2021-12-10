import React,{useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from "../components/login";
import Signup from "../components/signup";


const SignInOutContainer = () => {
     const [value, setvalue] = useState(0)
     const handleChange = (event,newValue) => {
         setvalue(newValue);
     };

    const paperStyle={width:500, margin:'20px auto'}

 function TabPanel(props) {
    const { children, value, index, ...other } = props;
     
    return (
         <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
         </div>
        );
      }

    return(
        <Paper  elevation={20} style={paperStyle}>
        <Tabs indicatorColor="primary" value={value} onChange={handleChange} >
            <Tab label="Login" />
            <Tab label="Signup" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Signup />
        </TabPanel>
        </Paper>
    )
}

export default SignInOutContainer