# 로그인 페이지 템플릿 시안 49

## 개요

**감성 테크** 무드와 **풀스크린 몰입형** 레이아웃을 결합한 로그인 MVP 시안입니다. 전체 화면을 활용하고, **입력 반응형 애니메이션**(포커스·값 유무에 따른 라벨·언더라인·필드 전환)으로 입력 시 시각적 피드백을 제공합니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 입력 반응형 애니메이션

## UI/UX 특징

- **감성 테크:** 다크 퍼플 그라데이션 배경(#1a1625 → #2d2438), 라벤더 포인트(#c9a0dc), 반투명 글래스 카드·블러로 감성적이면서 테크한 분위기 유지.
- **풀스크린 몰입형:** `position: fixed; inset: 0` 로 전체 뷰포트 활용, 중앙에 단일 폼 카드만 배치해 몰입감 제공.
- **입력 반응형 애니메이션:** has-focus / has-value 시 라벨 플로팅(translateY·scale)·색 변경, 언더라인 scaleX·glow, 필드 translateY·GSAP scale. 포커스/값 유무에 따라 자연스럽게 전환.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `emotionFullLogin`, HTMX 폼, has-focus/has-value 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·GSAP 입장·입력 반응 애니메이션
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
