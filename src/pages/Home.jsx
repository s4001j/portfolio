import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import SkillTag from "../components/SkillTag";
import Projects from "../components/Projects";
import ProjectPage from "./ProjectPage";
import Experience from "./Experience";
import SkillPage from "./SkillPage";

export default function Home(){

    return(
        <div className="p-5">
            <p className="text-gray-200 text-2xl">
            안녕하세요 이수정입니다. <br/>
            <span className="text-emerald-500 hover:text-orange-400">포트폴리오 페이지</span>에 오신 것을 환영합니다!</p>
            <br/> <br/>
            <div className="h-[350px] border-t-1">
            <ProjectPage/></div>
            <div className="h-100vh border-t-1">
            <Experience/></div><br/><br/>
            <div className="h-100vh border-t-1">
            <SkillPage/></div>
        </div>
    );
}