import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
      <Box sx={{width:'100vw', position:'relative', backgroundImage:"url('/bg.png')",minHeight:'200vh',backgroundRepeat:'no-repeat',backgroundSize:'100%'}} >
      <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',}} >

      </Box>
      </Box>
  )
}

export default Home
