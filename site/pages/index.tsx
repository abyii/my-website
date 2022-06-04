import { Typography, Paper, IconButton, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';

const Home: NextPage = () => {
  const darkMode = useTheme().palette.mode==='dark';

  return (
    <Paper variant='window' >
      <Paper sx={{padding:{md:'70px 110px'}, backgroundColor:darkMode?'#1A1A1A':'#EAEAEA', display:'flex',justifyContent:'space-between'}} >
        <Box>
          <Typography sx={{fontWeight:'200', fontSize:'42px', lineHeight:'1.1em', color:darkMode?'#fff':'#000'}} >Abhishek</Typography>
          <Typography sx={{fontWeight:'200', fontSize:'42px', lineHeight:'1.1em', color:"#808080"}} >Yanjarappa</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:{md:'200px'}}} >
          <Box>
            <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><GitHubIcon/></IconButton>
            <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><LinkedInIcon/></IconButton>
            <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><TwitterIcon/></IconButton>
            <IconButton size='small' sx={{marginLeft:'10px', color:'#808080'}} ><MailIcon/></IconButton>
          </Box>
          <Box sx={{alignSelf:'flex-end'}} >
            <Typography sx={{fontWeight:'400', fontSize:'15px', color:darkMode?'#fff':'#000'}} >
              Developer and Designer<br/>based in Bangalore.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Paper>
  )
}

export default Home
