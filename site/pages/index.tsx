import { AppBar, Paper, Toolbar, Typography, Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import {Box} from "@mui/system";
import Image from "../content/projects/marvel/thumb.png"

const Home: NextPage = () => {
  

  return (
    <Paper variant='window' >
      <Hero/>
      <AppBar position='sticky'>
      <Toolbar sx={{display:'flex',justifyContent:'center',width:'100%',}}>
        <Toolbar sx={{maxWidth:'lg',width:'100%',padding:{sm:'0px 100px'},overflowX:'auto'}} >
          <Button variant='focusedText' sx={{marginRight:'1em', fontSize:'12px'}}  >Showcase</Button>
          <Button sx={{marginRight:'1em', fontSize:'12px'}} href='/blog' >Blog</Button>
          <Button sx={{marginRight:'1em', fontSize:'12px'}} href='/projects' >Projects</Button>
          <Button sx={{marginRight:'1em', fontSize:'12px'}} href='/wins' >Ws</Button>
        </Toolbar>
       </Toolbar>
      </AppBar>
      <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr'},gap:'20px',padding:{xs:'0px 20px',sm:'0px 150px'}, height:'100vw'}} >
        <Box >
        <img src={"https://i.imgur.com/Ddt21IU.png"} width="100%"  />
        <Typography variant='overline' >PROJECT</Typography>
        <Typography variant='h6' >UVCE's Marvel</Typography>
        <Typography variant='caption' >
          If god got us them we gon' be alright. ni**a we gon' be alright. and when i wake up.
          i recognise that you look at me If god got us them we gon' be alright. ni**a we gon' be alright. and when i wake up.
          i recognise that you look at me
        </Typography>
        </Box>
      </Box>
    </Paper>//window
  )
}

export default Home
