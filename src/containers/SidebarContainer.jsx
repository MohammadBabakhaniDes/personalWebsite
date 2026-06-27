import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children, pageNumber }) => {
  const theme = useTheme();

  return (
    <Grid
      xs={0}
      lg={2.25}
      xl={2}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#0B1220" : "#0F172A",
        // borderLeft:"1px solid rgba(255,255,255,.05)",
        boxShadow: "0 8px 24px rgba(15,23,42,.10)",
        borderRadius: pageNumber == 0 || pageNumber == 4 ? 0 : 3,
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
        zIndex: 2,
      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
