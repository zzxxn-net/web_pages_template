# 로그인 페이지 템플릿 시안 53

## 개요

**실험적 인터페이스** 무드와 **단일 포커스 입력 흐름** 구조를 결합한 로그인 MVP 시안입니다. 한 번에 하나의 필드만 시각적으로 강조하고 나머지는 dimmed 처리하며, **GSAP 기반 부드러운 전환**으로 카드 입장·포커스 시 필드 scale 전환을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 단일 포커스 입력 흐름
- **인터랙션:** GSAP 기반 부드러운 전환

## UI/UX 특징

- **실험적 인터페이스:** 다크 배경(#0a0a0e), 네온 시안 포인트(#00ffc8), 모노스페이스 톤, 얇은 보더로 실험실/랩 느낌 유지.
- **단일 포커스 입력 흐름:** activeField 상태로 이메일/비밀번호 중 포커스된 필드만 is-active(border·box-shadow·라벨 색). 나머지 필드는 is-dimmed(opacity 0.55)로 한 번에 하나만 강조.
- **GSAP 기반 부드러운 전환:** 카드 입장(opacity, y), 포커스 시 해당 필드 scale(1.02), blur 시 scale(1)로 부드럽게 전환.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `expSingleGsapLogin`, HTMX 폼, is-active/is-dimmed 바인딩)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·GSAP 입장·포커스 시 필드 scale
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
