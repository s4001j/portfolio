import { useState } from "react";
import SkillTag from "../components/SkillTag";
import Projects from "../components/Projects";

export default function SkillPage(){
    const language = ['Java Script', 'C', 'JAVA', 'MySQL']
    const tools = [
        {
            id: 1,
            title: "React",
            text: "",
        },
        {
            id: 2,
            title: "React",
            text: "",
        },
        {
            id: 3,
            title: "React",
            text: "",
        },
        {
            id: 4,
            title: "React",
            text: "",
        },
        {
            id: 5,
            title: "React",
            text: "",
        },

        'React', 'Spring Boot', 'MySQL Workbench', 'Visual Studio Code', 'Git'];
    const certificates = ['ISTQB CTFL (2018)', '컴퓨터활용능력 2급 (2022)', 'MOS master 2010 (2013)', '무선설비산업기사 (2014)', 'ITQ 한글 A (2006)', '자동차운전면허 2종 보통 (2017)'];

    return(
        <div className="p-1 min-h-screen" id="skill">
            <div className="text-4xl mb-5">기술 스택</div>
            <div className="text-2xl">[경력]</div>
            <div className="text-2xl mt-10">[자격증]</div>
            <ul className="font-normal">
            {certificates.map((item, index) => (
                <li key={index}>ㆍ{item}</li>
            ))}
            </ul>
        </div>
    );
}