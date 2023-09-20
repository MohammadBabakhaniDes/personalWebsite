import { Box, Typography } from "@mui/material";
import bg2 from "../assets/bg02.jpeg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { fire, links } from "../constants/particle";
import { useTheme } from "@emotion/react";
import dayTheme from "../assets/dayTheme.jpg";
import TextTransition, { presets } from 'react-text-transition';
import { useState } from "react";


const Home = () => {
    const strings = [
        ' من یک توسعه دهنده ری اکت هستم',
        'من یک دانشجو هستم',
        'من یک فریلنسر هستم',
        'من یک متخصص فرانت اند هستم'
    ];
    const theme = useTheme();
    const [index, setIndex] = useState(0);


    const nameEl = useRef(null);
    // const infoEl = useRef(null);

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["محمد باباخانی"],
            typeSpeed: 110,
            backSpeed: 80,  // soraate pak shodane neveshte
            backDelay: 50,  // takhir ghablepak shodan
            showCursor: false,
        });

        const intervalId = setInterval(() => {setIndex((index) => index + 1)}, 1500);

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
            typedName.destroy();  // az ram estefade mikone pas pakesh mikonim.
            // typedInfo.destroy();
            clearTimeout(intervalId);
        };
    }, []);



    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const bg = theme.palette.mode === "dark" ? bg2 : dayTheme;

    return (
        <>
            <Particles id="tsparticles" options={theme.palette.mode === "dark" ? links : fire} init={particlesInit} loaded={particlesLoaded} />
            <Box
                sx={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >{/*Box mesle div bayad height bedi ta backgroundImage namayesh beda.*/}
                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'row' }}> {/* agar in ra flex nakonim bekhatere box bala amodi gharar migiran */}
                    <Typography variant="h3">{'{{'}</Typography> {/* be khatere rtl baraks gharar migire. */}
                    <Typography ref={nameEl} variant="h3" sx={{ color: bg === bg2 ? 'tomato' : '#187bcd' }}></Typography>
                    <Typography variant="h3">{'}}'}</Typography>
                </Box>
                <Typography
                    // ref={infoEl}
                    variant="h4" color="text.primary" sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }}>
                    <TextTransition springConfig={presets.wobbly}>{strings[index % strings.length]}</TextTransition>
                </Typography>
            </Box>
        </>
    )
}

export default Home;