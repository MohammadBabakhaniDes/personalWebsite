import {
    Coffee, 
    SchoolRounded,
    DataObjectRounded,
    DomainVerificationRounded,
} from "@mui/icons-material";

const DevWorkInfo = [
    {
        tooltipTitle: "تعداد قهوه های خورده شده",
        icon: <Coffee />,
        total: 1650,
        color: "rgba(248, 113, 113, 0.15)",
        colorB: "rgba(248, 113, 113, 1)",
    },
    {
        tooltipTitle: "تعداد دوره های دیده شده", 
        icon: <SchoolRounded />,
        total: 25,
        color: "rgba(135, 206, 250, 0.15)",
        colorB: "rgba(135, 206, 250, 1)",
    },
    {
        tooltipTitle: "تعداد پروژه های من",
        icon: <DataObjectRounded />,
        total: 34,
        color: "rgba(119, 136, 153, 0.15)",
        colorB: "rgba(119, 136, 153, 1)",
    },
    {
        tooltipTitle: "تعداد پروژه های به پایان رسیده",
        icon: <DomainVerificationRounded />,
        total: 12,
        color: "rgba(45, 212, 191, 0.15)",
        colorB: "rgba(45, 212, 191, 1)",
    },
];

export default DevWorkInfo;


