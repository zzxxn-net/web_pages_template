# 로그인 페이지 템플릿 시안 55

## 개요

**미래적 클린** 무드와 **풀스크린 몰입형** 레이아웃을 결합한 로그인 MVP 시안입니다. 전체 화면을 활용하고, **상태 변화 강조**(포커스·값 유무·로딩)로 시각적 피드백을 명확히 합니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 상태 변화 강조

## UI/UX 특징

- **미래적 클린:** 밝은 배경(#f8fafc), 화이트 카드, 얇은 보더(#e2e8f0), 블루 포인트(#3b82f6), 12px 라운드로 클린·미니멀 톤 유지.
- **풀스크린 몰입형:** position: fixed; inset: 0; 로 전체 뷰포트 활용, 중앙에 단일 폼 카드만 배치해 몰입감 제공.
- **상태 변화 강조:** has-focus 시 border·box-shadow·라벨 색 강조, has-value(입력값 있음) 시 border·라벨 색 변경, is-loading 시 버튼 opacity·텍스트 변경. GSAP으로 포커스 시 필드 scale(1.01) 전환.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `futureCleanFullStateLogin`, HTMX 폼, has-focus/has-value/is-loading 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·GSAP 입장·포커스 시 필드 scale
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
