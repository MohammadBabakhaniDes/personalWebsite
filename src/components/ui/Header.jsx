import { AppBar, Button, Slider, Toolbar, Typography, styled, useScrollTrigger } from "@mui/material";
import {cloneElement} from "react";
import logo from "../../assets/logo.svg"

const CustomizedButton = styled(Button) `
    color: lime
`

const Header = ()=> {

    function ElevationScroll(props) {
        const { children } = props;  
        const trigger = useScrollTrigger({ // trigger = karbar scrol mikone ya na.
            disableHysteresis: false,
            threshold: 0, // key triger beshe = 0: zaman shroe scrol
        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,  // triger=scrol shod  // 4=fixed beshe children  
        });
    }
    
    return(
        <>
        <ElevationScroll>
            <AppBar position="static">
                <Toolbar disableGutters>
                    <img style={{width: '3rem'}} alt="لوگوی سایت ماست" src={logo} />
                    <Typography variant="h4" sx={{marginLeft: 10, typography: 'h3'}}>وب سایت شخصی یونس</Typography> {/* 1.marginLeft fasele az rast mide be dalile (dir=rtl)  2.sx inline style ast pas h3 olaviat bishtari nesbat be variant=h4 dare */}
                    {/* <CustomizedButton variant="dashed" color="secondary">کلیک کن</CustomizedButton> */}
                    <Button variant="contained">کلیک دیوم</Button>              
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        </>
    )
}

export default Header;