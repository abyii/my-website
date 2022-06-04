import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "../theme/lightTheme";
import darkTheme from "../theme/darkTheme";
import {useMediaQuery} from "@mui/material";
import {useState, useEffect, useCallback} from "react";

function MyApp({ Component, pageProps }: AppProps) {

  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = useState('');

  const setupListener = useCallback(
    ()=>{
      if(typeof window !== 'undefined'){
      window.document.addEventListener("modeChange", (e:any)=>{
          window.localStorage.setItem("mode", e.detail.to);
          setMode(e.detail.to);
      });
      }
    },
    [],
  );
  
  useEffect(() => {
      const mode:any = window.localStorage.getItem('mode');    
      if(['light','dark'].includes(mode)){
        setMode(mode);
      }else{
        setMode(prefersLightMode ? 'light' : 'dark');
      }
      setupListener();
  }, []);


  return (
    <ThemeProvider theme={mode==='light' ? lightTheme : darkTheme} >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
