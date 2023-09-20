import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

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
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : محمد باباخانی</Info>
            <Info>سن : ۲۰</Info>
            <Info>شهر : کرمانشاه</Info>
            <Info>Mamad.Ba@Chmmail.ir : آدرس ایمیل</Info>
            <Info>شماره موبایل : ۰۹۳۵۰۰۰۰۰۰۰</Info>
        </>
    )
}

export default DevInfo;
