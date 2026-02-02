# 로그인 페이지 템플릿 시안 46

## 개요

**다크 아카이브** 무드와 **풀스크린 몰입형** 레이아웃을 결합한 로그인 MVP 시안입니다. 전체 화면을 활용하고, **포커스 이동 중심 UX**로 Tab/포커스 순서에 따른 시각적 강조와 GSAP 전환을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 포커스 이동 중심 UX

## UI/UX 특징

- **다크 아카이브:** 다크 배경(#0d0b0a), 웜 톤 그라데이션(#161210), 카드·보더·포인트(#b49a6c)로 아카이브/도서관 느낌 유지.
- **풀스크린 몰입형:** position: fixed; inset: 0; 로 전체 뷰포트 활용, 중앙에 반투명 카드 하나만 배치해 몰입감 제공.
- **포커스 이동 중심 UX:** focusField 상태로 이메일/비밀번호 중 포커스된 필드에 has-focus(border·box-shadow) 적용. tabindex 명시로 Tab 이동 순서 보장. GSAP으로 포커스 시 필드 scale(1.01) 전환.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `darkFullLogin`, HTMX 폼, has-focus 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·포커스·GSAP 초기화
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
