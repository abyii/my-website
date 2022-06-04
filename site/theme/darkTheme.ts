import {createTheme} from "@mui/material/styles";
import colorPalette from "./colorPalette";

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      window: true;
    }
}
  

const darkTheme = createTheme({
    typography:{
        fontFamily:"Mulish"
    },
    palette:{
        mode:'dark',
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
                        backgroundColor:colorPalette.darkest, minHeight:'100vh',width:'100vw',overflowX:'hidden'
                    }
                }
            ]
        }
    }
});

export default darkTheme;