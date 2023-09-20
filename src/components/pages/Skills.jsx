import { useEffect, useState } from "react";
import { devSkills } from "../../constants/skills";
import {Skill} from "./";


const Skills = () => {
    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } = devSkills;
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [js, setJs] = useState(0);
    const [react, setReact] = useState(0);
    const [node, setNode] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const progress = setInterval(() => {
            setHtml(prev => {
                const plus = Math.floor(Math.random() * 10);
                return Math.min(prev + plus, 95);
            });

            setCss(prev => {
                const plus = Math.floor(Math.random() * 10);
                return Math.min(prev + plus, 65);
            });

            setJs(prev => {
                const plus = Math.floor(Math.random() * 10);
                return Math.min(prev + plus, 50);
            });

            setReact(prev => {
                const plus = Math.floor(Math.random() * 10);
                return Math.min(prev + plus, 60);
            });

            setNode(prev => {
                const plus = Math.floor(Math.random() * 10);
                return Math.min(prev + plus, 0);
            });

            setGit(prev => {
                const plus = Math.floor(Math.random() * 10);
                return Math.min(prev + plus, 20);
            });
        }, 100);

        return () => {
            clearInterval(progress);
        }
    }, []);

    return (
        <>
            <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
            <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
            <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={js} />
            <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={react} />
            <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={node} />
            <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
        </>
    );
}

export default Skills;