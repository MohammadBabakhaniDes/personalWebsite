import { useTheme } from "@emotion/react";
import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SidebarFooter = ()=> {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                }}
            >
                <Typography variant="subtitle2" color={theme.palette.mode === "dark" ? "text.primary": "#888"}>
                    طراحی شده با{" "}
                    <FavoriteRounded
                        sx={{
                            verticalAlign: "middle",
                            color: "tomato",
                            height: 20,
                        }}
                    />
                </Typography>

                <Typography
                    variant="caption"
                    color={theme.palette.mode === "dark" ? "text.primary": "#888"}
                    sx={{ mt: 2 }}
                >
                    کپی رایت ۱۴۰۱{" "}
                    <CopyrightRounded
                        sx={{ verticalAlign: "middle", height: 16 }}
                    />
                </Typography>
            </Box>
        </>
    )
}

export default SidebarFooter;