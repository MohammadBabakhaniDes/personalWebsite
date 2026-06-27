import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { blue } from "../../helpers/color";

const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2 }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: blue,
        }}
      />
    </Typography>
  );
};

const InfoBigText = ({ children, title }) => {
  return (
    <>
      <Typography
        variant="body1"
        color="text.primary"
        textAlign="left"
        sx={{ mt: 2 }}
      >
        <Typography
          variant=""
          sx={{
            display: {
              xs: "none",
              sm: "inline",
            },
          }}
        >
          {children}
        </Typography>
        {title}
        <KeyboardArrowLeftRounded
          sx={{
            verticalAlign: "bottom",
            color: blue,
          }}
        />
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        textAlign="right"
        sx={{
          position: "relative",
          mb: 5.5,
          mt: 1.1,
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <div style={{ position: "absolute", right: -15, width: "100vw" }}>
          {children}
        </div>
      </Typography>
    </>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی: محمد باباخانی</Info>
      <Info>سن: ۲۳</Info>
      <Info>شهر: تهران</Info>
      
      <Info>شماره موبایل: ۰۹۰۱۶۲۲۶۷۴۵</Info>
      <InfoBigText title={" :آدرس ایمیل"}>
        mohammadbabakhani2003@gmail.com
      </InfoBigText>

      
    </>
  );
};

export default DevInfo;
