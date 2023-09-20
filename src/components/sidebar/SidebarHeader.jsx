import { Typography } from '@mui/material';
import avatar from "../../assets/1.jpg";
import ThemeActionButton from '../ThemeActionButton';
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';
import { CustomAvatar } from '../common';
import SocialMediaIcons from '../SocialMediaIcons';


const SidebarHeader = ()=> {

    const theme = useTheme();

    return(
        <>
            <ThemeActionButton />
            <CustomAvatar avatar={avatar} size={180} fallback="YG" />  
            <Typography variant='h6' color={"error"}>محمد باباخانی</Typography>
            <Typography variant='caption' color={theme.palette.mode === "light" ? grey[900] : grey[200]}>طراح سایت و توسعه دهنده ری اکت</Typography>            
            <SocialMediaIcons />
        </>
    )
}

export default SidebarHeader;