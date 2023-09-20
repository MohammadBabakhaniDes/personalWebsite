import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";    
import { SidebarContent } from ".";
import { SidebarDrawer } from "../drawer";


const Sidebar = () => {

    return (
        <>
            <Box>
            {/*    <DrawerActionButton />   vaghti overflow mizanim nabod mishe chon sidebarcontainer dar halat xs={0} ast. pas in joz overflow mahsub mishavad. */}

                <SidebarContent />
                
                <SidebarDrawer />
            </Box>
        </>
    )

}




// {/* <Tab label={
//     <div>
//         <Typography variant="subtitle2" color='white'>
//             <HomeRounded sx={{ verticalAlign: "middle", mx: 2 }} /> {/* dar component haye mui az sx be jaye style estefade mishe. */}
//             صفحه اصلی
//         </Typography>
//     </div>
// }></Tab>  */}


export default Sidebar;