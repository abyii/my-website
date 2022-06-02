import { Typography, Paper } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
      <Box sx={{width:'100vw', position:'relative',minHeight:'400vh',backgroundRepeat:'no-repeat',backgroundSize:'100%'}} >
      <Paper variant='window_colored' sx={{display:'grid',gridTemplateColumns:'2fr 1fr',width:'100%'}} >
        <Box>
          <Typography variant='h2' >Abhishek y</Typography>
        </Box>
      </Paper>
      </Box>
  )
}

export default Home
