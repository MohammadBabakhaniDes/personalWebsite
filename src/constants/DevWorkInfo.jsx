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
        color: "lightcoral",
    },
    {
        tooltipTitle: "تعداد دوره های دیده شده", 
        icon: <SchoolRounded />,
        total: 25,
        color: "lightskyblue",
    },
    {
        tooltipTitle: "تعداد پروژه های من",
        icon: <DataObjectRounded />,
        total: 34,
        color: "lightslategray",
    },
    {
        tooltipTitle: "تعداد پروژه های به پایان رسیده",
        icon: <DomainVerificationRounded />,
        total: 12,
        color: "lightseagreen",
    },
];

export default DevWorkInfo;


