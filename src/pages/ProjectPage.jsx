import { useState } from "react";
import SkillTag from "../components/SkillTag";
import Projects from "../components/Projects";
import tempBNB_DBtree from "../assets/tempBNB_DBtree.jpg";
import tempBNB_frontNbacktree from "../assets/tempBNB_frontNbacktree.jpg";

export default function ProjectPage(){
    const ProjectList = [
        {
            id:1,
            year:"2025.09.26.~2025.10.22.",
            title:"TempBNB",
            text:"숙박 예약 플랫폼",
            role:"위시리스트 쿼리, 홈화면, 검색창, 검색결과, 위시리스트, 레이아웃 헤더/푸터",
            tag: "React, TailwindCSS4, Spring Boot, MySQL",
            link: "https://github.com/s4001j/tempBNB",
            src: "https://temp-bnb-seven.vercel.app/",
        },
    ]
    const tagItems1 = ProjectList[0].tag.split(",").map(item=>item.trim());

    return(
        <>
        <div className="p-5 text-4xl mb-15">
            <div className="mb-5">Project</div>
            <Projects year="2025.09.26.~2025.10.22." title="TempBNB" text="숙박 예약 플랫폼" role="위시리스트 쿼리, 홈화면, 검색창, 검색결과, 위시리스트, 레이아웃 헤더/푸터" tag="React, TailwindCSS4, Spring Boot, MySQL" link="https://github.com/s4001j/tempBNB" src="https://temp-bnb-seven.vercel.app/" />
        </div>
        <div className="border-t-1 pt-7 p-5">
            <div className="text-xl font-bold">프로젝트 제목 (기능)</div>
            <div className="pl-3 mb-3 text-sm text-gray-200">{ProjectList[0].title} ({ProjectList[0].text})</div>
            <div className="text-xl font-bold">프로젝트 기간</div>
            <div className="pl-3 mb-3 text-sm text-gray-200">{ProjectList[0].year}</div>
            <div className="text-xl font-bold">기술 스택</div>
            <div className="mt-1 pl-3 mb-2 text-sm text-gray-200">
            {tagItems1.map((txt,i)=>(
                <span key={i}><SkillTag skill={txt}/></span>
            ))}
            </div>
            <div className="text-xl font-bold">설명</div>
            <div className="pl-3 mb-3 text-gray-200">
                프론트 페이지 및 백엔드 구성 :
                <img
                src={tempBNB_frontNbacktree}
                alt="empBNB_frontNbacktree"
                className="rounded-lg shadow-md"
                />
                <br/>
                DB 구성 :
                <img
                src={tempBNB_DBtree}
                alt="tempBNB_DBtree"
                className="rounded-lg shadow-md w-45 h-auto"
                />
            </div>
            <div className="text-xl font-bold">담당</div>
            <div className="pl-3 mb-3 text-sm text-gray-200">{ProjectList[0].role}</div>
            <div className="text-xl font-bold">결과물</div>
            <a
            href={ProjectList[0].link}
            target="_blank" //새 탭으로 열기
            rel="noopener noreferrer"   //새 탭이 원 페이지의 window 객체를 건드리지 못하도록
            className="text-gray-200 hover:text-blue-200 hover:border-orange-400 rounded-xl border border-blue-400 h-[30px] m-1 ml-3 p-1 pl-2 pr-2 text-center text-sm whitespace-nowrap"
            >
            GitHub Link
            </a>
            <a
                href={ProjectList[0].src}
                target="_blank" //새 탭으로 열기
                rel="noopener noreferrer"   //새 탭이 원 페이지의 window 객체를 건드리지 못하도록
                className="text-gray-200 hover:text-blue-200 hover:border-orange-400 rounded-xl border border-blue-400 h-[30px] m-1 p-1 pl-2 pr-2 text-center text-sm whitespace-nowrap"
            >
            배포
            </a>
        </div>
        </>
    );
}