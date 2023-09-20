import { Tab, Tabs } from "@mui/material";
import { grey } from '@mui/material/colors';
import { useContext } from "react";
import MainContext from "../../context";
import TabsData from "../../constants/TabsData";
import { useTheme } from "@emotion/react";


const SidebarTabs = () => {

    const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext);

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
            textColor="primary"
        >
            {
                data.map((tab, index) => (
                    <Tab
                        key={index}
                        onClick={() => { setDrawerOpen(false); }}
                        sx={{
                            "&.MuiTab-root": {
                                minHeight: 50,
                                backgroundColor: theme.palette.mode === 'dark' ? grey[800] : grey[400],
                                color: "text.primary",                              
                                mx: 1,
                                my: 0.5,
                                borderRadius: 2
                            }
                        }}
                        iconPosition="start"
                        {...tab}
                    />
                ))
            }
        </Tabs>
    )
}

export default SidebarTabs;