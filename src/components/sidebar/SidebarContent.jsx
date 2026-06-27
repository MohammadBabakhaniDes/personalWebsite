import { Box, Divider } from '@mui/material';
import { SidebarFooter, SidebarHeader, SidebarTabs } from '.';

const SidebarContent = () => {


    return (
        <Box
            //display={{sm: "none"}}
            sx={{ justifyContent: 'center', textAlign: 'center', mt: 2 }}>
            
            <SidebarHeader />

            <Divider variant="middle" />

            <SidebarTabs />

            <Divider varient="middle" sx={{ mt: 2 }} />
            
            <SidebarFooter />
        </Box>
    )
}

export default SidebarContent;