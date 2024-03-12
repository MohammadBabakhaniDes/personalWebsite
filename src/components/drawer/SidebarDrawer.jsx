import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { SidebarContent } from "../sidebar";
import { useContext } from "react";
import MainContext from '../../context';
import { useEffect } from "react";

const SidebarDrawer = ()=> {

    const {drawerOpen, setDrawerOpen } = useContext(MainContext);
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('lg'));

    useEffect(()=> {
        setDrawerOpen(drawer=> isMdUp?false:drawer);
    }, [isMdUp]);

    return (
        <Drawer open={drawerOpen} variant={"temporary"} onClose={() => {
            setDrawerOpen(false);
        }} sx={{
            "& .MuiDrawer-paper": { width: 300 }, display: {
                xs: "block",
                sm: 'block',
                lg: "none"
            }
        }}> {/* anchor behesh nemidim chon toye Grid tanzimat lazem ra dadim*/}
            {/* Drawer yek laye jadide ke css va hata xs={0} dar Grid ,... ham rush tasiri nemizare (nemitani drawer ra responsive koni albata adi nemitani ba ravesh sakht mitani.) */}
            <SidebarContent />
        </Drawer>
    )
}

export default SidebarDrawer;