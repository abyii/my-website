import { createTheme } from "@mui/material/styles";
import colorPalette from "./colorPalette";

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      window:true;
      window_colored:true;
    }
  }
  

const lightTheme = createTheme({
    typography:{
        fontFamily:'Open Sans'
    },
    palette:{
        primary:{
            dark: colorPalette.darker, main: colorPalette.main, light: colorPalette.lighter
        }
    },
    components:{
        MuiPaper:{
            styleOverrides:{
                root:{
                    borderRadius:'0px',boxShadow:'none',zIndex:'0'
                }
            },
            variants:[
                {props:{variant:"window"}, style:{backgroundColor:colorPalette.white}},
                {props:{variant:"window_colored"}, style:{backgroundColor:colorPalette.lighter}}
            ]
        },
        // MuiButton:{}
    }
});

export default lightTheme;