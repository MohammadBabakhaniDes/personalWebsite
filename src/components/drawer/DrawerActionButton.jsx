import { Box, Fab } from "@mui/material";
import MainContext from "../../context";
import { useContext } from "react";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          lg: "none",
        },
        position: "absolute", // jaye ziadi migire vaghti zire sidebarcontainer piade mishe ba absolute kardane an engar vojod nadare.
        left: 0,
        top: 0,
      }}
    >
      {/* <Fab
        color="error"
        aria-label=""
        size="small"
        sx={{ m: 2 }}
        onClick={() => {
          setDrawerOpen(true);
        }}
      > */}

      <span
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
          marginRight: 14,
        }}
        onClick={() => {
          setDrawerOpen(prevState => !prevState);
        }}
        // className={`cursor-pointer float-right mr-6 sm:hidden`}
      >
        {/* <RiMenu3Line
                className={`text-white bg-lime-500 w-11 h-11 p-1 rounded-full mt-2 shadow-2xl`}
                size={50}
              /> */}
        <span
          style={{
            width: 16,
            height: 3,
            borderRadius: 16,
            background: "#84cc16",
            display: "block",
            marginTop: 21,
          }}
          className="w-4 h-[3px] rounded-2xl bg-lime-500 block mt-6"
        ></span>
        <span
          style={{
            width: 28,
            height: 3,
            borderRadius: 16,
            background: "#84cc16",
            display: "block",
            marginTop: 5,
          }}
          className="w-7 h-[3px] rounded-2xl bg-lime-500 block mt-[5px]"
        ></span>
      </span>

      {/* <MenuRounded /> */}
      {/* </Fab> */}
    </Box>
  );
};

export default DrawerActionButton;
