import { useState } from "react";
import SkillTag from "../components/SkillTag";
import Projects from "../components/Projects";

export default function ProjectPage(){

    return(
        <div className="p-1 text-4xl min-h-screen">
            <div className="mb-5">Project</div>
            <Projects year="2025.09.26.~2025.10.22." title="TempBNB" text="숙박 예약 플랫폼" tag="React, Spring Boot, MySQL" link="https://github.com/s4001j/tempBNB" src="https://temp-bnb-seven.vercel.app/" />
        </div>
    );
}