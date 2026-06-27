import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";
import Navbar from "../containers/NavbarContainer";
import { green, teal, violet } from "../helpers/color";

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
    <>
    <Navbar />
      <Card
        sx={{
          height: "100vh",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.mode === "dark" ? "#111827" : "#F8FAFC",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="#14B8A6"
            cColor={theme.palette.mode === "dark" ? "#14B8A6" : teal}
            icon={<ForumRounded />}
            align="center"
            text="نظرات دانشجویان"
          />
          <CommentsSlider theme={theme} />
        </CardContent>
      </Card>
    </>
  );
};

export default Comments;
