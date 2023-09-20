import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import MainContext from "../../context";
import { useContext } from "react";

const DrawerActionButton = ()=> {

    const {setDrawerOpen} = useContext(MainContext);

    return (
        <Box sx={{
            display: {
                xs: "block",
                sm: "block",
                md: "none"
            },
            position: 'absolute'  // jaye ziadi migire vaghti zire sidebarcontainer piade mishe ba absolute kardane an engar vojod nadare.
        }}>
            <Fab color="error" aria-label="" size="small" sx={{ m: 2 }} onClick={() => {
                setDrawerOpen(true);
            }}>
                <MenuRounded />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton;