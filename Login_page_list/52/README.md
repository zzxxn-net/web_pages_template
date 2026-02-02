# 로그인 페이지 템플릿 시안 52

## 개요

**현대 판타지** 무드와 **카드 분리형 레이아웃**을 결합한 로그인 MVP 시안입니다. 브랜드 카드(Realm)와 폼 카드를 분리하고, **포커스 이동 중심 UX**로 Tab/포커스 순서에 따른 시각적 강조와 GSAP 전환을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지
- **UI 구조:** 카드 분리형 레이아웃
- **인터랙션:** 포커스 이동 중심 UX

## UI/UX 특징

- **현대 판타지:** 다크 퍼플 배경(#1a1625), 골드 포인트(#d4af37), 브랜드·폼 카드에 웜 톤·글로우로 레alm/판타지 느낌 유지.
- **카드 분리형:** 좌측(또는 상단) 브랜드 카드(Realm / 포커스를 옮기며 입장하세요), 우측(또는 하단) 폼 카드(입장). 520px 이상에서 가로 2열.
- **포커스 이동 중심 UX:** focusField 상태로 이메일/비밀번호 중 포커스된 필드에 has-focus(border·box-shadow) 적용. tabindex 명시로 Tab 이동 순서 보장. GSAP으로 포커스 시 필드 scale(1.02) 전환.
- **반응형:** PC~모바일 중앙 정렬, 520px 이하에서 세로 배치·패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `fantasyCardFocusLogin`, HTMX 폼, has-focus 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·GSAP 입장·포커스 시 필드 scale
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
