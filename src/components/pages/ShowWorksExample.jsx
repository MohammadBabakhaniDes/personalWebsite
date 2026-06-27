import Grid from "@mui/material/Unstable_Grid2";
import { courses } from "../../constants/courses";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Slide, Typography, useTheme } from "@mui/material";
import EllipsisText from "react-ellipsis-text";
import { amber, cyan, violet } from "../../helpers/color";
import { useNavigate } from "react-router-dom";


const ShowWorksExample = ({loading}) => {

    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <>
            {courses.map((course, index) => (
                <Grid
                    key={index}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    gap={5}
                    sx={{ mb: 7 }}
                >
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading
                                ? `${index + 3}99ms`
                                : "0ms",
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: {xs: 280, sm: 240, md: 320,lg: 270, xl:290},
                                backgroundColor: theme.palette.mode === 'dark' ? '#032530' : "#F8FAFC",   
                                border: "1px solid #E2E8F0",
                                borderRadius: 6, 
                                mx: 'auto'                          
                            }}                        
                        >
                            <CardActionArea onClick={() => {                                
                                // window.location.assign(course.link);
                                window.open(course.link);
                            }}>
                                <CardMedia
                                    component="img"
                                    height="250"                                    
                                    width="200"
                                    image={course.image}
                                    alt={course.title}
                                    sx={{ objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        textAlign="left"
                                        gutterBottom
                                    >
                                        {course.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        textAlign="left"
                                        gutterBottom
                                        sx={{ direction: "ltr" }}
                                    >
                                        <EllipsisText
                                            text={course.info}
                                            length={"88"}
                                        />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    href={course.link}
                                    size="small"                                    
                                    target="_blank"
                                    sx={{
                                        color: theme.palette.mode === 'dark' ? '' : '#032530'
                                    }}
                                >
                                    اطلاعات بیشتر
                                </Button>
                            </CardActions>
                        </Card>
                    </Slide>
                </Grid>
            ))}
        </>
    )
}

export default ShowWorksExample;