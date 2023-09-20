import { Box, IconButton } from "@mui/material";
import Socials from "../constants/Socials";

const SocialMediaIcons = () => {
    return (
        <Box sx={{ m: '0 auto', textAlign: 'center' }}>
            {
                Socials.map((social, index) => (
                    <IconButton key={index} aria-label={social.icon}>
                        <a href={social.href} target='_blank' rel='noopener noreferrer'>{social.comp}</a>
                    </IconButton>
                ))
            }
        </Box>
    )
}

export default SocialMediaIcons;