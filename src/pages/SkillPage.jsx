
export default function SkillPage(){
    const language = ['Java Script', 'C', 'JAVA', 'MySQL']
    const tools = [
        {
            id: 1,
            title: "React",
            text: "hook(useState, useRef, useEffect 등), 컴포넌트 및 props의 활용 등을 통하여 레이아웃 구성 및 기타 웹페이지를 작성할 수 있으며, fetch, axios, TanStack Query를 활용하여 DB와 백엔드 통신(Rest API)할 수 있습니다.",
        },
        {
            id: 2,
            title: "Spring Boot (v.4.32.0)",
            text: "객체 지향 프로그래밍의 개념을 이해하고, Spring Boot 프레임워크를 사용하여 프론트와 DB의 간단한 CRUD 데이터 통신을(백엔드) 수행할 수 있습니다.",
        },
        {
            id: 3,
            title: "MySQL Workbench (v.8.0.44)",
            text: "SQL 쿼리 생성/삽입, 수정/갱신, 삭제, 조회 등의 CRUD 작업을 수행할 수 있습니다.",
        },
        {
            id: 4,
            title: "Visual Studio Code (v.1.105.1)",
            text: "VS Code 환경에서 소스코드를 작성해왔습니다.",
        },
        {
            id: 5,
            title: "Git",
            text: "GitHub에 소스코드를 관리할 수 있으며, 동료들과 협업한 경험이 있습니다.",
        },
    ];
    const certificates = ['ISTQB CTFL (2018)', '컴퓨터활용능력 2급 (2022)', 'MOS master 2010 (2013)', '무선설비산업기사 (2014)', 'ITQ 한글 A (2006)', '자동차운전면허 2종 보통 (2017)'];

    return(
        <div className="p-5 min-h-screen" id="skill">
            <div className="text-4xl mb-10">기술 스택</div>
            <div className="text-2xl">[언어]</div>
            <ul className="font-normal">
            {language.map((item, index) => (
                <li key={index}>ㆍ{item}</li>
            ))}
            </ul>
            <div className="text-2xl mt-10">[Tools]</div>
            <div className="overflow-x-auto break-words">
            <table className="min-w-full table-auto border-collapse">
                {/* 테이블 헤더 */}
                <thead className="">
                <tr>
                    <th className="px-4 py-2 border-b text-left">No.</th>
                    <th className="px-4 py-2 border-b text-left">항목</th>
                    <th className="px-4 py-2 border-b text-left">설명</th>
                </tr>
                </thead>

                {/* 테이블 본문 */}
                <tbody>
                {tools.map((row) => (
                    <tr key={row.id} className="hover:bg-zinc-300">
                    <td className="px-4 py-2 border-b">{row.id}</td>
                    <td className="px-4 py-2 border-b">{row.title}</td>
                    <td className="px-4 py-2 border-b">{row.text}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}