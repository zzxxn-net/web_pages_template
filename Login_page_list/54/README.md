# 로그인 페이지 템플릿 시안 54

## 개요

**네오 브루탈리즘** 무드와 **풀스크린 몰입형** 레이아웃을 결합한 로그인 MVP 시안입니다. 전체 화면을 활용하고, **입력 반응형 애니메이션**(포커스·값 유무에 따른 보더·box-shadow·라벨 강조·GSAP scale)으로 입력 시 시각적 피드백을 제공합니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 입력 반응형 애니메이션

## UI/UX 특징

- **네오 브루탈리즘:** 베이지 배경(#f2f0e8), 굵은 블랙 보더(3px), 오프셋 box-shadow(12px 12px 0), 대담한 타이포·버튼으로 브루탈한 톤 유지.
- **풀스크린 몰입형:** position: fixed; inset: 0; 로 전체 뷰포트 활용, 중앙에 단일 카드만 배치해 몰입감 제공.
- **입력 반응형 애니메이션:** has-focus / has-value 시 필드 box-shadow(4px~6px 0), 라벨 색·font-weight 강조. 포커스 시 GSAP scale(1.02) 전환.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩·shadow 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `brutalFullInputLogin`, HTMX 폼, has-focus/has-value 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·GSAP 입장·포커스 시 필드 scale
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
