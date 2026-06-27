import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import { userComments } from "../../constants/userComment";
import { red, sky, teal } from "../../helpers/color";

const CommentsSlider = ({ theme }) => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Box
      component="div"
      sx={{
        mt: 15,
        justifyContent: "center",
        alignItems: "center",

        "& .slick-dots li button:before": {
      color: "#475569", // رنگ نقطه‌های غیرفعال
      fontSize: "10px",
      opacity: 1,
    },

    "& .slick-dots li.slick-active button:before": {
      color: "#2DD4BF", // رنگ نقطه فعال
      opacity: 1,
    },
      }}
    >
      <Slider {...options}>
        {userComments.map((user, index) => (
          <Box key={index} component="div" sx={{ justifyContent: "center" }}>
            <Avatar
              src={user.avatar}
              variant="rounded"
              sx={{
                height: 100,
                width: 100,
                margin: "0 auto",
              }}
            />
            <Typography
              sx={{ fontWeight: 700, fontSize: "22px" }}
              variant="body1"
              textAlign="center"
              color="text.primary"
            >
              {user.fullname}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              color="text.primary"
              sx={{ mb: 2, color: "#64748B", fontSize: "14px" }}
            >
              {user.jobTitle}
            </Typography>
            <Card
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#1B2435" : "#fff",
                border:
                  theme.palette.mode === "dark"
                    ? "2px solid #2DD4BF"
                    : "1px solid #E2E8F0",
                boxShadow: "0 8px 22px rgba(15,23,42,.05);",
                position: "relative",
                borderRight: "4px solid #14B8A6",
                borderLeft: "4px solid #14B8A6",
                width: { xs: "94%", sm: "80%", md: "70%", lg: "620px" },
                lineHeight: 2,
                padding: "28px",
                fontSize: '18px',
                color: theme.palette.mode === "dark" ? "#E5E7EB" : "#334155",
                m: "0 auto",
                borderRadius: 5,
              }}
            >
              {/* <FormatQuoteIcon /> */}
              <CardContent>
                <Typography variant="body2" textAlign="center">
                  {user.comment}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CommentsSlider;
