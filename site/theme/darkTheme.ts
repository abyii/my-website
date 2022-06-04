import {createTheme} from "@mui/material/styles";
import colorPalette from "./colorPalette";

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      window: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      focusedText: true;
    }
}

const darkTheme = createTheme({
    typography:{
        fontFamily:"Mulish"
    },
    palette:{
        mode:'dark',
        primary:{
            dark:colorPalette.darkest, main:colorPalette.main, light:colorPalette.lightest
        }
    },
    components:{
        MuiPaper:{
            styleOverrides:{
                root:{
                    boxShadow:'none',borderRadius:'0px',
                }
            },
            variants:[
                {
                    props:{variant:'window'},
                    style:{
                        backgroundColor:colorPalette.darkest, minHeight:'100vh',width:'100vw',
                        overflowX:'hidden' 
                    
                    }
                }
            ]
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    background:colorPalette.darkest
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform:'none', color:colorPalette.dark,
                    "&:hover":{color:colorPalette.light, textShadow:'0px 4px 30px #FFFFFF'}
                }
            },
            variants:[
                {
                    props:{variant:'focusedText'},
                    style:{
                        textDecoration:'underline',color:colorPalette.light,
                        textShadow:'0px 4px 30px #FFFFFF',
                        "&:hover":{textDecoration:'underline'}
                    }
                }
            ]
        }
    }
});

export default darkTheme;