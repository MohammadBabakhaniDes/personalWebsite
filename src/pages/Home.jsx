import { Box, Typography } from "@mui/material";
import bg2 from "../assets/bg02.jpeg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Particles from "react-particles";
import { useCallback } from "react";
import { fire, links } from "../constants/particle";
import { useTheme } from "@emotion/react";
import dayTheme from "../assets/dayTheme.jpg";
import TextTransition, { presets } from "react-text-transition";
import { useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { cyan, indigo, red, slate, teal, violet } from "../helpers/color";
import Navbar from "../containers/NavbarContainer";

const Home = () => {
  const strings = [
    "من محمد باباخانی هستم",
    "یک توسعه دهنده ری اکت",
    "عاشق کدنویسی تمیز و بهینه",
    "دنبال یادگیری و بهبود مهارت ها",
    "دارای تجربه همکاری در تیم های مختلف",
    "نقاط قوتم عملکرد بالا، خلاقیت و تعهدکاری",
  ];
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);
  // const infoEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد باباخانی"],
      typeSpeed: 110,
      backSpeed: 80, // soraate pak shodane neveshte
      backDelay: 50, // takhir ghablepak shodan
      showCursor: false,
    });

    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 1500);

    // const typedInfo = new Typed(infoEl.current, {
    //     strings: strings,
    //     startDelay: 1500,
    //     typeSpeed: 80,
    //     backSpeed: 50,
    //     backDelay: 50,
    //     loop: true,
    //     showCursor: false,
    // });

    return () => {
      typedName.destroy(); // az ram estefade mikone pas pakesh mikonim.
      // typedInfo.destroy();
      clearTimeout(intervalId);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const bg = theme.palette.mode === "dark" ? bg2 : dayTheme;

  return (
    <div style={{position: 'relative', top: 0, right: 0, width: "100%", zIndex: 200}}>
      <Navbar position="fixed" ismdUpHiddenNavbar={true} />
      
      <Particles
        id="tsparticles"
        options={theme.palette.mode === "dark" ? links : fire}
        init={particlesInit}
        loaded={particlesLoaded}  
        // style={{position: 'relative', zIndex: 8}}
      />
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",                
        }}
      >
        {/*Box mesle div bayad height bedi ta backgroundImage namayesh beda.*/}
        <Box component={"div"} sx={{ display: "flex", flexDirection: "row" }}>
          {" "}
          {/* agar in ra flex nakonim bekhatere box bala amodi gharar migiran */}
          <Typography variant="h3">{"{{"}</Typography>{" "}
          {/* be khatere rtl baraks gharar migire. */}
          <Typography
            ref={nameEl}
            variant="h3"
            sx={{
              color: bg === bg2 ? red : "#fff",
              mb: 3,
              textShadow:
                bg === bg2
                  ? "1px 1px 2px white, 0 0 25px white, 0 0 5px white;"
                  : "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;",
            }}
          ></Typography>
          <Typography variant="h3">{"}}"}</Typography>
        </Box>
        <Typography
          // ref={infoEl}
          variant="h5"
          color="text.primary"
          sx={{            
            color: '#000',
            textShadow:
              bg === bg2
                ? "1px 1px 2px white, 0 0 25px white, 0 0 5px white;"
                : `1px 1px 2px ${cyan}, 0 0 25px ${violet}, 0 0 5px ${indigo};`,
            fontSize: 21,
          }}
        >
          <TextTransition springConfig={presets.wobbly}>
            {strings[index % strings.length]}
          </TextTransition>
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
