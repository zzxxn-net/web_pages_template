# 로그인 페이지 템플릿 시안 45

## 개요

**현대 판타지** 무드와 **마이크로 인터랙션 중심** 구조를 결합한 로그인 MVP 시안입니다. 입력 필드·토글·버튼에 포커스·호버 시 작은 피드백(스케일·글로우)을 주고, GSAP으로 등장·전환을 부드럽게 연출합니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지
- **UI 구조:** 마이크로 인터랙션 중심
- **인터랙션:** GSAP 기반 부드러운 전환

## UI/UX 특징

- **현대 판타지:** 다크 배경(#1a1625), 카드(#252030), 골드 포인트(#d4af37), 글로우·텍스트 섀도우로 판타지 톤 유지.
- **마이크로 인터랙션:** 필드 포커스 시 border·box-shadow·글로우 강조, GSAP scale(1.02). 토글 호버 시 scale(1.03)·글로우, GSAP scale(1.05). 버튼 호버 시 translateY·scale·box-shadow, GSAP scale(1.03).
- **GSAP:** 카드 등장(opacity, y), 필드 focus/blur scale, 토글·버튼 mouseenter/mouseleave scale으로 자연스러운 피드백.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `fantasyMicroLogin`, HTMX 폼, is-focused 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·마이크로 인터랙션·GSAP 초기화
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
