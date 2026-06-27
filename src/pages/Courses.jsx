import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";
import { ShowWorksExample } from "../components/pages";
import CustomDivider from "../components/common/CustomDivider";
import { blue, red, violet } from "../helpers/color";
import { useTheme } from "@emotion/react";
import Navbar from "../containers/NavbarContainer";

const Courses = ({ helmetTitle }) => {
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
      <CardContent sx={{pt: 1.8}}>
        <CustomDivider
          bColor="primary.main"
          // cColor="primary" /// in bud rangesh
          cColor={theme.palette.mode === "dark" ? "#EC4899" : violet}
          icon={<SchoolRounded />}
          align="center"
          text="نمونه کارهای من"
        />
        <Grid container sx={{ mx: 3, mt: 5, direction: "ltr" }}>
          <ShowWorksExample loading={loading} />
        </Grid>
      </CardContent>
    </Card>
    </>
  );
};
export default Courses;
