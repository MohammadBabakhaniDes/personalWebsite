import { Card, CardContent, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import avatar from "../assets/mamad6.jpg";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import { CustomAvatar, CustomDivider } from "../components/common";
import { useTheme } from "@emotion/react";
import { blue, cyan } from "../helpers/color";
import Navbar from "../containers/NavbarContainer";

const About = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
        <CardContent
          sx={{
            mt: 1,
            p: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          <Grid container sx={{ mx: 0 }}>
            <Grid
              xs={12}
              sm={12}
              md={8}
              lg={8}
              sx={{ mb: { xs: 6, sm: 0 }, mt: { xs: 1, sm: 0 } }}
            >
              <CustomDivider
                bColor="rgba(34,211,238,.18)"
                cColor={
                  theme.palette.mode === "dark"
                    ? "primary"
                    : "rgba(34,211,238,.10)"
                }
                align={isMdUp ? "right" : "center"}
                // align={"right"}
                icon={
                  <CodeRounded                    
                    style={{color: '#0891B2'}}
                    sx={{
                      mt: {
                        sm: 0,
                        xs: 8,
                      },
                      display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                      },
                    }}
                  />
                }
                text={"توسعه دهنده ری اکت و مهندس کامپیوتر"}
                textColor="#0891B2"
                paddingChip={"25px 12px"}
              />

              <Grid container>
                <Grid
                  xs={0}
                  sm={4}
                  md={3}
                  lg={3}
                  sx={{
                    mt: 4,
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                    },
                  }}
                >
                  <DevWorkCount />
                </Grid>

                <Grid xs={12} sm={8} md={9} lg={9} sx={{ mr: "auto" }}>
                  <DevInfo />
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={0} sm={0} md={4} lg={4}>
              <CustomAvatar
                avatar={avatar}
                width={240}
                height={270}
                fallback="MB"
                variant="square"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid sx={{ width: 1, mt: 1, mb: 6 }}>
              {" "}
              {/* in width:1 kheily moheme agar nabashe Grid width nemigire va textAlign:center Divider kar nemikone. */}
              <CustomDivider
                bColor="rgba(59,130,246,.25)"
                cColor={theme.palette.mode === "dark" ? "secondary" : "rgba(59,130,246,.14~.18)"}
                textColor="#2563EB"
                icon={<SelfImprovementRounded style={{color: "#2563EB"}} />}
                align="center"
                text="مهارت های من"
              />
              <Skills />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
