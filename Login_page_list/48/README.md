# 로그인 페이지 템플릿 시안 48

## 개요

**실험적 인터페이스** 무드와 **카드 분리형 레이아웃**을 결합한 로그인 MVP 시안입니다. 브랜드 카드와 폼 카드를 분리하고, **상태 변화 강조**(포커스·값 유무·로딩)로 시각적 피드백을 명확히 합니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 카드 분리형 레이아웃
- **인터랙션:** 상태 변화 강조

## UI/UX 특징

- **실험적 인터페이스:** 다크 배경(#0a0a0e), 네온 시안 포인트(#00ffc8), 모노스페이스 톤, 얇은 보더로 실험실/랩 느낌 유지.
- **카드 분리형:** 좌측(또는 상단) 브랜드 카드(LAB / 실험실 로그인), 우측(또는 하단) 폼 카드(접속). 520px 이상에서 가로 2열.
- **상태 변화 강조:** has-focus 시 border·box-shadow 강조, has-value(입력값 있음) 시 border 색 변경, is-loading 시 버튼 opacity·텍스트 변경. GSAP으로 포커스 시 필드 scale(1.02) 전환.
- **GSAP:** 래퍼·브랜드·폼 카드 순차 등장(opacity, y, x).

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `expCardLogin`, HTMX 폼, has-focus/has-value/is-loading 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·상태·GSAP 초기화
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
