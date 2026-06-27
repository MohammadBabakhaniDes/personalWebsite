import { useState, useEffect } from "react";

import { Divider, Chip, Typography, Slide } from "@mui/material";

const CustomDivider = ({ bColor, cColor, icon, align, text, paddingChip = 3, textColor = "black" }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Slide
        direction="down"
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
        }}
      >
        <Divider
          variant="middle"
          textAlign={align}
          sx={{
            "&::before, &::after": {
            //   border: 1,
              border: {
                xs: `1px solid ${bColor}`,                
                // xs: 0,
              },
              borderColor: bColor,
            },
            // mb: 3

            // textAlign: align
          }}
        >
          <Chip
            icon={icon}
            // color={cColor}
            label={
              <Typography
                variant="body1"
                color="black"
                sx={{ textAlign: "center", color: textColor }}
              >
                {text}
              </Typography>
            }
            sx={{ p: paddingChip, backgroundColor: cColor }}
          />
        </Divider>
      </Slide>
    </>
  );
};

export default CustomDivider;
