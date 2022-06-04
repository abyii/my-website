import {createTheme} from "@mui/material/styles";
import colorPalette from "./colorPalette";

const lightTheme = createTheme({
    typography:{
        fontFamily:"Mulish"
    },
    palette:{
        mode:'light',
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
                        backgroundColor:colorPalette.lightest, minHeight:'100vh',
                        width:'100vw',overflowX:'hidden'
                    }
                }
            ]
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    background:'#fff'
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform:'none', color:colorPalette.dark,
                    "&:hover":{color:colorPalette.darkest}
                }
            },
            variants:[
                {
                    props:{variant:'focusedText'},
                    style:{
                        textDecoration:'underline',color:colorPalette.darkest,
                        fontWeight:'800',
                        "&:hover":{textDecoration:'underline'}
                    }
                }
            ]
        }
    }
});

export default lightTheme;