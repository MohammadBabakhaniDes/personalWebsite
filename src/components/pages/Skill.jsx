import {
  Badge,
  Box,
  Chip,
  Divider,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";

const Skill = ({ name, icon, color, darkColor, colorB, value }) => {
  const theme = useTheme();
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before, ::after": {
            border: 1,
            borderColor: colorB,
          },
          mt: 3,
        }}
      >
        <Chip
          // color={color}
          icon={<Box component="img" src={icon} height={20} width={23} />}
          label={name}
          sx={{ p: 3, backgroundColor: colorB, fontWeight: 600 }}
        />
      </Divider>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 5 }}>
        <Box sx={{ minWidth: 35, mr: 1 }}>
          <Typography variant="body2" color="#000">
            <Badge
              variant="standard"
              badgeContent={`${value}%`}
              //   color={color}
              sx={{ backgroundColor: theme.palette.mode === 'dark' ? darkColor :  color }}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            // color={color}
            variant="determinate"
            value={value}
            sx={{
              height: 10,
              borderRadius: 2,
              backgroundColor: `${theme.palette.mode === 'dark' ? darkColor : color}33`, // 0.2 opacity (hex)

              "& .MuiLinearProgress-bar": {
                backgroundColor: theme.palette.mode === 'dark' ? darkColor : color,
                // backgroundColor: theme.palette.mode === 'dark' ? '#032530' : "#F8FAFC", 
                borderRadius: 2,
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
