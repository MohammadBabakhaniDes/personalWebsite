import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import avatar from "../assets/mamad.jpg";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import { CustomAvatar, CustomDivider } from "../components/common";

const About = () => {
    return (
        <Card sx={{ height: '100vh', overflowY: 'scroll' }}>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={12} md={8} lg={8}>
                        <CustomDivider
                            bColor="text.primary" 
                            cColor="primary"    
                            align="right"
                            icon={<CodeRounded />}
                            text={"توسعه دهنده ری اکت و دانشجوی دانشگاه رازی"}
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

                            <Grid xs={12} sm={8} md={9} lg={9} sx={{ mr: 'auto' }}>                                
                                <DevInfo />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={0} sm={0} md={4} lg={4}>
                        <CustomAvatar avatar={avatar} size={250} fallback="MB" />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>  {/* in width:1 kheily moheme agar nabashe Grid width nemigire va textAlign:center Divider kar nemikone. */}
                    <CustomDivider
                        bColor="text.primary"
                        cColor="secondary"
                        icon={<SelfImprovementRounded />}
                        align="center"
                        text="مهارت های من"
                    />
                    
                    <Skills />    
                    </Grid>
                </Grid>


            </CardContent>
        </Card >
    )
}


export default About;



