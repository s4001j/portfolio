import { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function useShowWhenScrolled(threshold = 120) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(y > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll(); // 초기 상태 반영
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}

function ToTheTop() {
  const visible = useShowWhenScrolled(120);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
      className={`
        cursor-pointer border-gray-200 border-2 rounded-full h-[35px] w-[35px] 
        flex flex-col items-center justify-center
        bg-indigo-600 hover:cursor-pointer text-gray-200 
        transition-colors duration-200,
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
        }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}

const Menu=()=>{
  const navi = useNavigate();
  return(
    <>
    <button onClick={()=>navi("/")} className="hover:cursor-pointer hover:text-indigo-500">소개</button>
    <br/>
    <button onClick={()=>navi("/projectPage")} className="hover:cursor-pointer hover:text-indigo-500">프로젝트</button>
    <br/>
    <button onClick={()=>navi("/experience")} className="hover:cursor-pointer hover:text-indigo-500">경력 및 자격증</button>
    <br/>
    <button onClick={()=>navi("/skillPage")} className="hover:cursor-pointer hover:text-indigo-500">기술 스택</button>
    </>
  );
}

function GlobalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed col-span-1 sm:col-span-2 inline-block bg-[#0d1e44ff] w-full min-w-0 sm:max-w-[250px] sm:min-h-screen sm:ml-auto p-3 sm:text-right top-0 sm:mt-4 z-[1000]">
      <div className="flex">
        <div className="mx-auto">
        <Link to="/" className="text-center text-[#F0F2F5] text-2xl mb-5"> Sujeong's Portfolio </Link> <br/>
        <button className="text-gray-400 flex mx-auto sm:hidden text-sm">(s4001j@gmail.com)</button>
        </div>

        {/* 작은 브라우저 사이즈 드롭다운메뉴 */}
        <div className={"sm:hidden relative inline-block right-0 transform -translate-x-1/6 mt-3 ml-3 pr-3"}>
          <button
          onClick={()=>setIsOpen(!isOpen)}
          className="flex ml-auto p-2 rounded-md ring-2 ring-indigo-500 hover:ring-orange-400"
          >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-indigo-500"></div>
            <div className="w-6 h-0.5 bg-indigo-500"></div>
            <div className="w-6 h-0.5 bg-indigo-500"></div>
          </div>
          </button>
          <div className={`absolute text-right right-0 p-1 pr-4 mt-1 w-30 ${isOpen?"border-b-1 border-indigo-500 bg-[#0d1e44ff]":"border-none"}`}>{isOpen && (<Menu/>)}</div>
        </div>
      </div>
      <div className="mt-7 hidden sm:block box-border text-right pt-1">
          이수정 <br/>
          프론트엔드 개발자<br/>
          s4001j@gmail.com
      </div>
      <div className="hidden sm:block box-border border-t-1 border-emerald-700 mt-5 pt-1">
        <br/>
        <Menu/>
      </div>
    </header>
  );
}


function GlobalFooter() {
  return (
    <footer className="p-4 flex justify-center border-t z-[1000]">
        &copy; Sujeong's Portfolio (s4001j@gmail.com)
    </footer>
  );
}
// Black 디자인 추천 톤: #0C0C0C #1A1A1A #222222 #2C2C2C
// White 디자인 추천 톤: #EDEDED #F5F5F5 #FAF9F6 
// 블루그레이: #F0F2F5
// #0b1937ff

export default function GlobalLayout() {
  const [scrollTarget, setScrollTarget] = useState(null);
  return (
    <div className="flex flex-col box-border w-full min-w-0 bg-[#0d1e44ff] text-emerald-500 pt-5 overflow-x-hidden break-words">
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-5 justify-center">
        <GlobalHeader/>
        <main className="col-span-1 sm:col-span-4 mr-auto p-1 mb-3 max-w-5xl mt-15 sm:mt-1 sm:ml-65 pl-0 sm:pl-5 sm:border-l-1 border-emerald-700">
            <ScrollToTop />
            <Outlet />
        </main>
      </div>
      <GlobalFooter />

      <div className="fixed bottom-8 right-4 z-[1000] max-w-5xl">
        <ToTheTop />
      </div>
    </div>
  );
}