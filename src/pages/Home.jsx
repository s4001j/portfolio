import Projects from "../components/Projects";
import Experience from "./Experience";
import SkillPage from "./SkillPage";

export default function Home(){

    return(
        <div className="p-5">
            <p className="text-gray-200 text-2xl">
            안녕하세요 이수정입니다. <br/>
            <span className="text-orange-400 hover:text-emerald-500">포트폴리오 페이지</span>에 오신 것을 환영합니다!</p>
            <br/> <br/>
            <div className="h-[350px] border-t-1">
            <div className="p-5 text-4xl h-screen">
                <div className="mb-5">Project</div>
                <Projects year="2025.09.26.~2025.10.22." title="TempBNB" text="숙박 예약 플랫폼" role="위시리스트 쿼리, 홈화면, 검색창, 검색결과, 위시리스트, 레이아웃 헤더/푸터" tag="React, TailwindCSS4, Spring Boot, MySQL" link="https://github.com/s4001j/tempBNB" src="https://temp-bnb-seven.vercel.app/" />
                </div>
            </div>
            <div className="h-100vh border-t-1">
            <Experience/></div><br/><br/>
            <div className="h-100vh border-t-1">
            <SkillPage/></div>
        </div>
    );
}