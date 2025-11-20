import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 *
 * 기능:
 * - 라우트 변경 시 자동으로 스크롤 이동
 * - window 또는 특정 containerId 스크롤 가능
 * - top, left, behavior(auto/smooth) 설정 가능
 * - SSR 환경 방어
 * - containerId를 찾지 못해도 window 스크롤로 fallback
 * - 라우터의 location.key 기반으로 정확한 route-change 감지
 */
export default function ScrollToTop( {
  containerId = null,
  top = 0,
  left = 0,
  behavior = "auto",
} ) 
{
  const { key } = useLocation();

  useLayoutEffect(() => {
    // SSR 환경(Next.js 등)에서 document/window 없는 상황 방어
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // 특정 컨테이너 우선
    let el = null;
    if (containerId) {
      try {
        el = document.getElementById(containerId);
      } catch (err) {
        // document.getElementById에서 예외 방어
        console.error(`ScrollToTop: invalid containerId "${containerId}"`, err);
      }
    }

    // 스크롤 옵션
    const scrollOptions = { top, left, behavior };

    // 엘리먼트 존재 → 내부 스크롤 이동
    if (el && typeof el.scrollTo === "function") {
      el.scrollTo(scrollOptions);
      return;
    }

    // fallback: window 스크롤 이동
    if (typeof window.scrollTo === "function") {
      window.scrollTo(scrollOptions);
    }
  }, [key, containerId, top, left, behavior]); // 라우트 변경 시 무조건 실행

  return null;
}

/*
사용 예시
 - 기본 페이지 맨 위 : <ScrollToTop />
 - 특정 스크롤 영역 이동: <ScrollToTop containerId="page-content" />
 - 부드러운 스크롤 이동: <ScrollToTop behavior="smooth" />
 - 특정 좌표로 이동: <ScrollToTop top={150} left={0} behavior="smooth" />

 main.jsx에서의 사용:
 <BrowserRouter>
  <ScrollToTop />
  <App />
</BrowserRouter>
*/


///// 백업 ///////////////////
// import { useLayoutEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//     const { pathname } = useLocation();

//     useLayoutEffect(()=>{
//         window.scrollTo(0,0);
//     }, [pathname]);

//     return null;
// }

// export default ScrollToTop;