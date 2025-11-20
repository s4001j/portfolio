import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import SkillTag from "../components/SkillTag";
import Projects from "../components/Projects";

export default function Home(){

    return(
        <div className="p-1 text-2xl">
            안녕하세요 프론트엔드 개발자에 이수정입니다. <br/>
        <SkillTag skill="React"/>
        포트폴리오 소개222222222222222 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        text scroll
        <div className="text-4xl" id="projects">Projects</div>
        <div className="m-5">
        <Projects year="2025.09.26.~2025.10.22." title="TempBNB" text="숙박 예약 플랫폼" tag="React, Spring Boot, MySQL" link="https://github.com/s4001j/tempBNB" src="https://temp-bnb-seven.vercel.app/" />
        </div>
        </div>
    );
}