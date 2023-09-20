import { ConnectWithoutContactRounded, FaceRounded, HomeRounded, MessageRounded, TerminalRounded, TextSnippetRounded } from '@mui/icons-material';

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`   // "" be dalil ine ke aria-controls reshte ast va be onvan prop dade mishe.
    }
}
 
const TabsData = () => {
    const tabs = [
        {
            label: "صفحه اصلی",
            icon: <HomeRounded />,
            ...tabProps(0)
        },
        {
            label: "درمورد من",
            icon: <FaceRounded />,
            ...tabProps(1)
        },
        {
            label: "رزومه من",
            icon: <TextSnippetRounded />,
            ...tabProps(2)
        },
        {
            label: "نمونه کار",
            icon: <TerminalRounded />,
            ...tabProps(3)
        },
        {
            label: "نظر دانشجویان",
            icon: <MessageRounded />,
            ...tabProps(4)
        },
        {
            label: "ارتباط با من",
            icon: <ConnectWithoutContactRounded />,
            ...tabProps(5)
        }
    ];

    return tabs;
}

export default TabsData;
