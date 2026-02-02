# 로그인 페이지 템플릿 시안 47

## 개요

**미래적 클린** 무드와 **비대칭 레이아웃**을 결합한 로그인 MVP 시안입니다. 좌측 브랜드·우측 폼 비대칭 그리드에 **입력 반응형 애니메이션**(포커스 시 border·box-shadow·GSAP scale)을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린
- **UI 구조:** 비대칭 레이아웃
- **인터랙션:** 입력 반응형 애니메이션

## UI/UX 특징

- **미래적 클린:** 밝은 배경(#f8fafc), 화이트 카드·폼 영역, 블루 포인트(#3b82f6), 12px 라운드로 클린·미래감 유지.
- **비대칭 레이아웃:** grid-template-columns 1fr 1.1fr로 좌측 브랜드(Sign in / 미래를 위한 계정으로 접속하세요), 우측 폼 영역 분리. 640px 미만에서 세로 스택.
- **입력 반응형 애니메이션:** focus-within 시 border·box-shadow 강조, GSAP으로 포커스 시 필드 scale(1.02), 블러 시 scale(1) 전환.
- **GSAP:** 그리드·브랜드·패널 순차 등장(opacity, y, x).

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `futureAsymLogin`, HTMX 폼, 비대칭 그리드)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·입력 반응·GSAP 초기화
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
