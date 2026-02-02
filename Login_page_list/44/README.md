# 로그인 페이지 템플릿 시안 44

## 개요

**사이버 미니멀** 무드와 **단계 분할형(Progressive Form)** 구조를 결합한 로그인 MVP 시안입니다. 이메일 → 비밀번호 순의 2단계 입력 플로우를 유지하며, **스크롤 없는 고정 플로우**로 한 화면 내에서만 동작하도록 설계했습니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 사이버 미니멀
- **UI 구조:** 단계 분할형(Progressive Form)
- **인터랙션:** 스크롤 없는 고정 플로우

## UI/UX 특징

- **사이버 미니멀:** 그레이·블루 계열 배경(#eef1f5), 흰색 카드, 얇은 보더(#e2e8f0), 포인트 컬러 #3182ce, 12px 라운드로 미니멀한 톤 유지.
- **단계 분할형:** Step 1(이메일 입력 + 다음) → Step 2(비밀번호 입력 + 이전/로그인). 상단 인디케이터(1–2)와 패널 전환으로 진행 상태 표시.
- **스크롤 없는 고정 플로우:** html·body·메인에 overflow: hidden 적용, min-height: 100dvh로 뷰포트 고정. 스크롤 없이 한 화면에서만 로그인 플로우 완결.
- **GSAP:** 카드 등장(opacity, y), 단계 전환 시 패널 opacity·x 전환. MutationObserver로 step 변경 감지 후 애니메이션 실행.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `cyberProgLogin`, HTMX 폼, 단계 인디케이터·패널)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·단계·GSAP 초기화
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
