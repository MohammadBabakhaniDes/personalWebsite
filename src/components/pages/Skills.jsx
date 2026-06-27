import { useEffect, useState } from "react";
import { devSkills } from "../../constants/skills";
import { Skill } from "./";

const Skills = () => {
  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    reactSkill,
    tsSkill,
    gitSkill,
    nextSkill,
  } = devSkills;
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [react, setReact] = useState(0);
  const [next, setNext] = useState(0);
  const [ts, setTs] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const progress = setInterval(() => {
      setHtml((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 95);
      });

      setCss((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 85);
      });

      setJs((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 70);
      });

      setTs((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 30);
      });

      setReact((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 90);
      });

      setNext((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 50);
      });      

      setGit((prev) => {
        const plus = Math.floor(Math.random() * 10);
        return Math.min(prev + plus, 45);
      });
    }, 100);

    return () => {
      clearInterval(progress);
    };
  }, []);

  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        darkColor={htmlSkill.darkColor}
        colorB={htmlSkill.colorB}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        darkColor={cssSkill.darkColor}
        colorB={cssSkill.colorB}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        darkColor={jsSkill.darkColor}
        colorB={jsSkill.colorB}
        value={js}
      />
      <Skill
        name={tsSkill.name}
        icon={tsSkill.icon}
        color={tsSkill.color}
        darkColor={tsSkill.darkColor}
        colorB={tsSkill.colorB}
        value={ts}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        darkColor={reactSkill.darkColor}
        colorB={reactSkill.colorB}
        value={react}
      />
      <Skill
        name={nextSkill.name}
        icon={nextSkill.icon}
        color={nextSkill.color}
        darkColor={nextSkill.darkColor}
        colorB={nextSkill.colorB}
        value={next}
      />

      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        darkColor={gitSkill.darkColor}
        colorB={gitSkill.colorB}
        value={git}
      />
    </>
  );
};

export default Skills;
