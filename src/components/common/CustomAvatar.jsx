import { Avatar } from "@mui/material";

const CustomAvatar = ({ avatar, sizeOfCircle, fallback, variant="circular", height, width }) => {
    return (
        <>
            <Avatar                        
                src={avatar}
                variant={variant}
                sx={{
                    height: variant == "circular" ? sizeOfCircle : height,
                    width: variant == "circular" ? sizeOfCircle : width,
                    borderRadius: variant != "circular" ? 5 : "",
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                {fallback}
            </Avatar>
        </>
    );
};

export default CustomAvatar;
