import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#8be9fd'  // main ke bedi, baghi automatic meghdar migiran lazem nist be baghi meghdar bedi.
    },
    secondary: {
      main: '#bd93f9'
    }
  },
  typography: {
    fontFamily: "vazir, tahoma, Roboto",
  },
});

export const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: '#8be9fd',  // main ke bedi, baghi automatic meghdar migiran lazem nist be baghi meghdar bedi.
    },
    secondary: {
      main: '#bd93f9'
    }
  },
  typography: {
    fontFamily: "vazir, tahoma, Roboto",
  },
  
});



  // mitanim chand theme dakhele createTheme besazim va ba entekhab karbar va state yek them ba pelate range khodesh piade beshe.



   // components: {
    //     MuiButton: {
    //         variants: [
    //           {
    //             props: { variant: 'dashed' },
    //             style: {
    //               textTransform: 'none',
    //               border: `2px dashed ${blue[500]}`,
    //             },
    //           },
    //           {
    //             props: { variant: 'dashed', color: 'secondary' },
    //             style: {
    //               border: `4px dashed ${red[500]}`,
    //             },
    //           },
    //         ],
    //       },
    // }

    //NOTE dakhele theme tarif mishe.
