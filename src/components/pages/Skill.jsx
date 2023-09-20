import { Badge, Box, Chip, Divider, LinearProgress, Typography } from "@mui/material";

const Skill = ({ name, icon, color, value }) => {


    return (
        <>
            <Divider textAlign="right"
                sx={{
                    "&::before, ::after": {
                        borderColor: `${color}.main`
                    },
                    mt:3
                }}
            >
                <Chip
                    color={color}
                    icon={
                        <Box
                            component="img"
                            src={icon}
                            height={20}
                        />
                    }
                    label={name}
                    sx={{ p: 3}}
                />
            </Divider>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box sx={{ minWidth: 35, mr:1 }}>
                    <Typography variant="body2" color="#000">
                    <Badge variant="standard" badgeContent={`${value}%`} color={color} />
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress color={color} variant="determinate" value={value} sx={{ height: 10, borderRadius: 2 }} />
                </Box>

            </Box>
        </>
    )
}

export default Skill;