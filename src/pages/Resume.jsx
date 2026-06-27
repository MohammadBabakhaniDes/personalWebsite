import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import CustomDivider from "../components/common/CustomDivider";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";
import Navbar from "../containers/NavbarContainer";
import { blue, indigo, red, teal } from "../helpers/color";
import { useTheme } from "@emotion/react";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Card
        sx={{
          height: "100vh",
          overflowY: "scroll",
          background: theme.palette.mode === "dark" ? "#111827" : "#F8FAFC",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor={"#93C5FD"}
            cColor={theme.palette.mode === "dark" ? "#8B5CF6" : blue}
            icon={<SettingsEthernetRounded />}
            align="center"
            text="رزومه من"
          />
          {/* <div style={{ position: "relative" }}>
            <Typography
              sx={{
                textAlign: "center",
                background: indigo,
                p: 1.5,
                pr: 0.5,
                pl: 3,
                borderRadius: 3,
                width: 130,
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SettingsEthernetRounded style={{ color: "#666" }} />
              رزومه من
            </Typography>
          </div> */}

          <div
            style={{
              background: "#666",
              height: 30,
              // width: 1,
              width: 0,
              margin: "15px auto 0 auto",
            }}
          ></div>
          <Grid container sx={{}}>
            <Grid xs={12} sm={6} sx={{ mt: { xs: 3, sm: 1 } }}>
              <CustomDivider
                bColor="warning.main"
                cColor={theme.palette.mode === "dark" ? "#F59E0B" : red}
                icon={<HomeRepairServiceRounded />}
                align="center"
                text="تجربیات"
              />
              <DevExpTimeline loading={loading} />
            </Grid>
            <Grid xs={12} sm={6} sx={{ mt: 1 }}>
              <CustomDivider
                bColor="info.main"
                cColor={theme.palette.mode === "dark" ? "#06B6D4" : teal}
                icon={<SchoolRounded />}
                align="center"
                text="تحصیلات"
              />
              <DevEduTimeline loading={loading} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Resume;
