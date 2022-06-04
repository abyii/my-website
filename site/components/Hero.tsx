import { FC } from 'react';
import { Typography, Paper, IconButton, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Hero:FC = () => {
    const darkMode = useTheme().palette.mode==='dark';

    const handleThemeToggle = ()=>{
      if(typeof window !== 'undefined'){
        window.document.dispatchEvent(
          new CustomEvent("modeChange",{
            detail:{to:darkMode ? 'light' : 'dark'}
          }));
      }
    }

  return (
    <Paper sx={{backgroundColor:darkMode?'#101010':'#EAEAEA', width:'100%',display:'flex',justifyContent:'center'}} >
    
    <Box sx={{position:'relative', maxWidth:'lg',width:'100%', height:{xs: '450px', md:'350px'}}} >
      
      <Box sx={{position:'absolute',top:{xs:'150px',md:'70px'},left:{xs:'35px',sm:'110px'}}} >
        <Typography sx={{fontWeight:darkMode ?'200':'300', fontSize:{xs:'42px',sm:'42px'}, lineHeight:'1.1em', color:darkMode?'#fff':'#000'}} >Abhishek</Typography>
        <Typography sx={{fontWeight:darkMode ?'200':'300', fontSize:{xs:'42px',sm:'42px'}, lineHeight:'1.1em', color:"#808080"}} >Yanjarappa</Typography>
      </Box>{/* Abhishek Yanjarappa */}
      
      <Box sx={{position:'absolute', top:{xs:'30px',sm:'70px'},right:{xs:'35px',sm:'110px'}}} >
        <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><GitHubIcon/></IconButton>
        <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><LinkedInIcon/></IconButton>
        <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><TwitterIcon/></IconButton>
        <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><MailIcon/></IconButton>
        <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} onClick={handleThemeToggle} >
          {darkMode ? <LightModeIcon/> : <DarkModeIcon/>}
        </IconButton>
      </Box>

      <Box sx={{position:'absolute', bottom:{xs:'45px',sm:'70px'},right:{xs:'35px',sm:'110px'}}} >
        <Typography sx={{fontWeight:darkMode ?'300':'400', fontSize:'14px', color:darkMode?'#fff':'#000'}} >
          Developer and Designer<br/>based in Bangalore.
        </Typography>
      </Box>
    </Box>
  </Paper>
  )
}

export default Hero