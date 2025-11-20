import { useState } from "react";
import SkillTag from "./SkillTag";

const ProjDetail = ({ detailPop, onClose, children }) => {
  if (!detailPop) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center z-[1000]" onClick={onClose}>
      <div className="bg-zinc-800 p-5 rounded-3xl shadow-lg absolute top-[105px] w-[400px] h-[450px]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="flex ml-auto text-sm text-gray-300 hover:text-gray-500">닫기</button>
        {children}
      </div>
    </div>
  );
};


export default function Projects({year, title, text, tag, link, src}){
    const tagItems = tag.split(",").map(item=>item.trim());
    const [detailPop, setDetailPop] = useState(false);
    const closePop = () => setDetailPop(false);

    return (
        <div onClick={()=>setDetailPop(true)} className="border rounded-lg p-3 gap-3 w-[400px] hover:border-blue-600">
            <div className="relative group">
                <span className="absolute left-2/3 transform  translate-y-1/2 bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-orange-600 text-gray-200 text-sm rounded whitespace-nowrap">
                클릭하여 상세 내용 보기
                </span>
            <div className="text-sm">
                {year}
            </div>
            <div className="text-2xl mt-1">
                {title}
            </div>
            <div className="text-gray-200 text-xl mt-1 ml-3">
                {text}
            </div>
            <div className="mt-1">
                {tagItems.map((txt,i)=>(
                    <span key={i}><SkillTag skill={txt}/></span>
                ))}
            </div>

            <ProjDetail detailPop={detailPop} onClose={closePop}>
                <div className="text-xl font-bold">프로젝트 제목</div>
                <div className="pl-3 mb-3 text-sm text-gray-200">{title}</div>
                <div className="text-xl font-bold">프로젝트 기간</div>
                <div className="pl-3 mb-3 text-sm text-gray-200">{year}</div>
                <div className="text-xl font-bold">기술 스택</div>
                <div className="mt-1 pl-3 mb-2 text-sm text-gray-200">
                {tagItems.map((txt,i)=>(
                    <span key={i}><SkillTag skill={txt}/></span>
                ))}
                </div>
                <div className="text-xl font-bold">담당 및 성과</div>
                <div className="pl-3 mb-3 text-sm text-gray-200">{text}</div>
                <div className="text-xl font-bold">결과물</div>
                <a
                href={link}
                target="_blank" //새 탭으로 열기
                rel="noopener noreferrer"   //새 탭이 원 페이지의 window 객체를 건드리지 못하도록
                className="text-gray-200 hover:text-blue-200 hover:border-orange-400 rounded-xl border border-blue-400 h-[30px] m-1 ml-3 p-1 pl-2 pr-2 text-center text-sm whitespace-nowrap"
                >
                GitHub Link
                </a>
                <a
                    href={src}
                    target="_blank" //새 탭으로 열기
                    rel="noopener noreferrer"   //새 탭이 원 페이지의 window 객체를 건드리지 못하도록
                    className="text-gray-200 hover:text-blue-200 hover:border-orange-400 rounded-xl border border-blue-400 h-[30px] m-1 p-1 pl-2 pr-2 text-center text-sm whitespace-nowrap"
                >
                배포
                </a>
            </ProjDetail>
        </div>
        </div>
    );
}