import { useEffect, useState } from "react";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layouts/MainLayout";
import Page from "../components/pages/Page";
import { useMediaQuery } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import { Sidebar } from "../components/sidebar";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { About, Home, Resume, Courses, Comments, Contact } from "../pages";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@emotion/react";



function AppContainer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const [mode, setMode] = useState();
  const handleThemeChange = ()=> {
    setMode(prevmode=> prevmode === 'dark' ? 'light' : 'dark');
  }

  const [pageNumber, setPageNumber] = useState(0);
  const handlePageNumber = (event, newValue) => { //event = chon Tabs onChange dare.
    if (newValue >= 0 & newValue <= 5) {
      setPageNumber(newValue);  // chera mesle ghabli faghat az setDrawerOpen estefade nashode? chon male tabs ast va agar event ra nazarim kar nemikone.
    }
  }

  const prefersDarkMode = useMediaQuery("(prefers-color-schema:dark)");

  useEffect(()=> {
    setMode(prefersDarkMode ? "dark": "light");
  }, []);


  return (
    <MainContext.Provider value={{
      pageNumber,
      handlePageNumber,
      drawerOpen,
      setDrawerOpen,
      handleThemeChange
    }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            index={pageNumber}
            onChange={handlePageNumber}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Helmet>
                <title>وب سایت محمد باباخانی | صفحه اصلی</title>
              </Helmet>
              <Home />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <Helmet>
                <title>وب سایت محمد باباخانی | درباره من</title>
              </Helmet>
              <About />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Helmet>
                <title>وب سایت محمد باباخانی | رزومه من</title>
              </Helmet>
              <Resume />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Helmet>
                <title>وب سایت محمد باباخانی |  نمونه کارها</title>
              </Helmet>
              <Courses />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Helmet>
                <title>وب سایت محمد باباخانی | نظرات دانشجویان</title>
              </Helmet>
              <Comments />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Helmet>
                <title>وب سایت محمد باباخانی |  ارتباط با من</title>
              </Helmet>
              <Contact />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  )

}
export default AppContainer;
