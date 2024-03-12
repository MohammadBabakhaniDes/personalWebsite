import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({children})=> {
    const theme = useTheme();

    return (
        <Grid xs={0} lg={2.4} sx={{
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
            height: '100vh',
            overflowY:'auto',
            overflowX:'hidden'
            }}
        >
            {children}
        </Grid>
    )
}

export default SidebarContainer;