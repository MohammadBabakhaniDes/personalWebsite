import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
    Card,
    CardContent,        
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";
import { ShowWorksExample } from "../components/pages";
import CustomDivider from "../components/common/CustomDivider";

const Courses = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);    

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false); 
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",                
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider 
                    bColor="primary.main"
                    cColor="primary"
                    icon={<SchoolRounded />}
                    align="center"
                    text="نمونه کارهای من"
                />                
                <Grid container sx={{ mx: 3, mt: 3 }}>                   
                    <ShowWorksExample loading={loading} />
                </Grid>
            </CardContent>
        </Card>
    );
};
export default Courses;
