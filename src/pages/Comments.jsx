import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
    Box,
    Typography,
    Avatar,
    Card,
    CardContent
} from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import {CommentsSlider} from "../components/pages";




const Comments = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();


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
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.mode === 'dark' ? grey[800] : grey[100]
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="success.main"
                    cColor="success"
                    icon={<ForumRounded />}
                    align="center"
                    text="نظرات دانشجویان"
                />            
                <CommentsSlider theme={theme} />
            </CardContent>
        </Card>
    );
};

export default Comments;
