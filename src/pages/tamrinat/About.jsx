import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import img from "../assets/mamad.jpg";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { useState } from "react";



const About = () => {

    const [abilityOpen, setAbilityOpen] = useState(false);

    const abilities = [
        {lang:'HTML', per:100},
        {lang: 'CSS', per:80},
        {lang: 'JavaScript', per:50} , 
        {lang: 'React', per:50}
    ];

    return (
        <Grid container sx={{ height: '100vh', overflow: 'auto', background: '#eeeeee' }}>
            <Grid xs={12} md={7}>
                <Card sx={{ width: '100%', backgroundColor: "#fff", color: 'black', m: 2 }}>
                    <CardContent>
                        <List sx={{ width: '100%' }}>
                            {['نام و نام خانوادگی: محمد باباخانی', 'آدرس: کرمانشاه، بلوار کیهانشهر، شهرک رسالت', 'سن: 21 سال', 'تاریخ تولد: 1381/06/27'].map((value, index) => (
                                <ListItem
                                    key={index}
                                >
                                    <ListItemText primary={value} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>

                <Card sx={{ width: '100%', backgroundColor: "#fff", color: 'black', m: 2, display:abilityOpen?'block':'none'}}>
                    <CardContent sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>توانایی های من</Typography>
                        {abilities.map((ab) => (
                            <>
                                <Typography variant="h6" sx={{ display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor: '#111', color: 'whitesmoke', p: 0.75, m: 0.25, borderRadius: 5 }}>{`${ab.lang}  `}
                                    {/* <Box sx={{m:0, p:0}}> */}
                                        <CircularProgressWithLabel value={ab.per} />
                                    {/* </Box> */}
                                </Typography>
                            </>
                        ))}
                        <Button onClick={()=> {setAbilityOpen(false)}} sx={{border:'1px solid #111', borderRadius: 5, color:'black', width:0.5, textAlign:'center'}}>مخفی کن</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} md={5} sx={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ width: '70%', height: '90vh', overflow: 'auto', textAlign: 'left', background: '#fff', color: 'common.black' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"

                            sx={{ height: { xs: '55vh', sm: '80vh', md: '55vh' }, width: '100%' }}
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                محمد باباخانی
                            </Typography>
                            <Typography variant="body2">
                                من محمد باباخانی هستم الان دو ساله که مداوم مشغول برنامه نویسی فرانت
                                فول استک هستم و تمام سعی خود را میکنم که وظیفه خود را به نحو احسنت
                                اجرا کنم
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={()=> {setAbilityOpen(true)}} size="small" color="success">
                            دیدن توانایی های من
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default About;