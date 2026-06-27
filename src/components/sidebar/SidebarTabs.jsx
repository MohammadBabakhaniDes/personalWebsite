import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from "../../context";
import TabsData from "../../constants/TabsData";
import { useTheme } from "@emotion/react";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = TabsData();
  const theme = useTheme();

  return (
    <Tabs
      orientation="vertical"
      variant="fullWidth"
      scrollButtons="auto"
      allowScrollButtonsMobile
      // sx={{color: "text.primary"}}
      value={pageNumber}
      onChange={handlePageNumber}
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          onClick={() => {
            setDrawerOpen(false);
          }}
          sx={{
            minHeight: 50,
            backgroundColor:
              theme.palette.mode === "dark" ? "#1E293B" : "#9CA3AF",
            border: theme.palette.mode === "dark"? "1px solid #334155": "",
            color: "text.primary",
            mx: 1,
            // display: "flex",
            // justifyItems: "start",
            pr: 3.5,
            my: 0.5,
            borderRadius: 2,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#263449" : "#E5E7EB",
              color: "skyblue",
            },
          }}
          iconPosition="start"
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
