import { Box, useMediaQuery, useTheme } from "@mui/material";
import avatar from "../assets/icons/mb-logo-1.svg";
import { DrawerActionButton } from "../components/drawer";

export default function Navbar({
  position = "relative",
  ismdUpHiddenNavbar = false,
}) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        width: "100%",
        display: ismdUpHiddenNavbar ? (isMdUp ? "none" : "block") : "block",
        background: theme.palette.mode === 'dark' ? "#071224" : "#fafafa",
        borderBottom: theme.palette.mode === 'dark' ? "1px solid #10233f" : "1px solid #E5E7EB",
        position: position,
        top: 0,
        right: 0,
        zIndex: 1,        
        height: 50,
        boxShadow: "0 2px 4px rgba(0,0,0,0.06)",                
      }}
    >
      <DrawerActionButton />
      <img
        alt=""
        src={avatar}
        width={40}
        height={40}
        style={{ position: "absolute", top: 5, left: 14 }}
      />
    </Box>
  );
}
